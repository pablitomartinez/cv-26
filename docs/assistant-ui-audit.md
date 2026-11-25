# Auditoría puntual de la interfaz del asistente

## Alcance

Corrección expresamente autorizada de la interfaz del asistente y documentación del entorno local. Árbol inicialmente limpio en `feature/actualizacion-portfolio-profesional`. No se modifica contenido profesional, traducciones, PDF, modelo, prompts, API, rate limiting, contrato ni lógica conversacional. Sin dependencias nuevas, instalaciones, variables de entorno, configuración global, cambios de rama, commits o pushes.

## Hallazgos y causas

### 1. Cierre interceptado por la navbar — defecto reproducido

- `Header.tsx` usa `position: fixed` y `z-index: 100`; su rectángulo interactivo cubre todo el ancho superior, incluso con fondo transparente.
- El panel de `PortfolioAssistant.tsx` usaba `position: fixed` y `z-index: 70`. Sus ancestros en `App.tsx`/`Index.tsx` no añaden transformaciones, filtros, aislamiento ni otra capa que lo proteja del header. Los contextos creados por el blur del header o por otros componentes permanecen subordinados a sus respectivas capas.
- Desde `sm`, el panel tiene altura `min(640px, 100dvh - 8rem)` y margen inferior de 6rem. En pantallas de hasta 768px de alto puede empezar a 32px del borde superior: se cruza con la navbar.
- Reproducción en Edge headless, 1280×720, sin scroll: el cierre ocupaba x=1180, y=49, 36×36px. `document.elementFromPoint()` en su centro devolvía el header del sitio, no el botón. El problema es el orden de capas, no el callback `onClick`. La descarga del CV es hija de ese mismo header; no tiene una capa independiente.
- No se encontraron estilos globales que anulen los eventos del cierre. BackToTop tiene capa 40 y ya se oculta mediante el evento de apertura: no es la causa de esta intercepción.

**Solución mínima:** panel en capa **101**, un nivel sobre el header existente (100), sin escaladas arbitrarias ni cambios a la navbar. Se mantiene la geometría general; el cierre pasa de 36×36 a **44×44px**, sin encogerse, y conserva nombre accesible y foco visible.

### 2. Foco tras cerrar — defecto reproducido

El botón de apertura se desmonta mientras el panel está abierto. Los handlers de cierre/Escape intentaban enfocarlo inmediatamente después de actualizar el estado, antes de que React lo montara. La comprobación inicial confirmó que Escape cerraba sin devolver el foco.

**Solución:** devolver el foco en el efecto de `isOpen`, tras el montaje del disparador. Un ref recuerda si estuvo abierto para no robar foco al cargar la página. Se conserva el foco inicial en el input al abrir, Escape y el comportamiento no modal del diálogo; no se añade una trampa de foco.

### 3. BackToTop oculto en la secuencia de teclado — defecto en código

`opacity: 0` y `pointer-events: none` no eliminan un botón del recorrido con Tab. Se añade `tabIndex=-1` y `aria-hidden` cuando está oculto por scroll o por apertura del asistente. No cambia su posición, capa ni funcionamiento visible.

## Diagnóstico del 404 local

- `package.json`: `dev` ejecuta únicamente `vite`; `preview` sirve el build estático.
- `vite.config.ts`: puerto 8080, plugin React y tagger; sin proxy `/api`, middleware ni integración de funciones.
- Existe `api/assistant.ts`, con handler Web Standard `export default { fetch(request) }`. No hay `vercel.json` ni configuración Vercel local en el árbol inspeccionado; los ajustes remotos del proyecto no se inspeccionaron.
- Se inició el servidor real de Vite con la configuración del proyecto y puerto efímero para no interferir con 8080. Un POST HTTP real a `/api/assistant` devolvió **404**, sin ejecutar la función ni contactar al proveedor.
- Causa confirmada: **Vite standalone no ejecuta Vercel Functions**. No es evidencia de un fallo del endpoint en producción, de credenciales ni del modelo. Añadir solo variables no crea la ruta.

## Procedimiento local propuesto (no ejecutado)

Ver los pasos de [README.md](../README.md#desarrollo-local-frontend-y-api): CLI Vercel compatible, vinculación al proyecto existente y `vercel dev --listen 3000`. Navegar al origen público de Vercel, no al puerto interno de Vite. No se requiere cambiar la URL relativa `/api/assistant`, crear otro servidor a mano ni conectar el frontend local a producción.

La estructura `api/*.ts` y el handler Web Standard son compatibles con el runtime Node.js documentado por Vercel. La compatibilidad efectiva de la CLI instalada y los ajustes remotos de Development todavía requiere ejecución autorizada. Si aparece un error de handler/compilación, revisar primero versión de CLI, preset Vite y Development Command del proyecto (no debe ejecutar recursivamente `vercel dev`); no migrar la API ni tocar configuración global como parte de este diagnóstico.

Las cuatro variables de `.env.example` deben estar disponibles de forma segura para el backend de Development. No se consultaron valores ni se ejecutaron `vercel link`, `vercel dev`, comandos de descarga de entorno o despliegues. Una pregunta válida usa OpenAI y Redis externos: tener función local no los convierte en servicios offline. Evitar compartir credenciales/contadores de producción sin aprobación.

Pruebas de enrutamiento sin consumo de proveedor: GET debe responder 405 con `Allow: POST`; POST con `{}` debe responder 400. Un 404 indica que la función sigue sin estar enrutada; un 503/502 en una pregunta válida requiere revisar el entorno/servicios sin desactivar límites ni exponer secretos.

Referencias oficiales consultadas:

- [Vercel CLI: dev](https://vercel.com/docs/cli/dev).
- [Vercel Functions: runtime Node.js y TypeScript en api/](https://vercel.com/docs/functions/runtimes/node-js).
- [Vite en Vercel](https://vercel.com/docs/frameworks/frontend/vite).
- [Variables de entorno con Vercel CLI](https://vercel.com/docs/cli/env).

## Validaciones ejecutadas

- Edge headless instalado, controlado por Chrome DevTools Protocol mediante WebSocket nativo de Node; sin instalar automatizadores o navegadores. Script de auditoría temporal fuera del repositorio.
- Reproducción previa de intercepción del cierre y fallo de devolución de foco.
- Matriz posterior: **390×844, 375×667, 768×700, 1280×720, 1440×900 y 844×390**, cada una en claro y oscuro (12 combinaciones).
- En cada combinación: clic real en apertura/cierre; hit-testing del centro del cierre; objetivo mínimo 44×44; cierre dentro del viewport y panel sin desborde horizontal; reapertura mediante Enter; recorrido inverso con Shift+Tab hasta el cierre; cierre con Enter y Escape; foco restaurado al disparador; BackToTop oculto sin eventos de puntero ni parada de Tab.
- Sin peticiones conversacionales durante esta prueba. Se bloquearon solicitudes HTTPS externas en el navegador de auditoría, incluidas fuentes remotas; se comprobaron interacciones y geometría, no fidelidad tipográfica visual.
- `npm run build`: exitoso; avisos preexistentes de Browserslist y chunk mayor a 500 KB.
- `node --test tests/*.test.mjs`: **7/7**, sin fallos; mensajes de error del proveedor esperados en casos negativos.
- ESLint antes/después: **16 errores y 8 advertencias preexistentes**, en los mismos archivos/líneas; sin problemas nuevos en los componentes tocados.
- `git diff --check`: sin errores (solo avisos de conversión futura LF/CRLF). Diff limitado a los dos componentes y documentación.
- PDF comparado de forma binaria con HEAD y `dist/`: idéntico, sin modificaciones. Contenido profesional, traducciones y archivos del backend intactos.

## Revisión manual pendiente

- Confirmación visual en navegador interactivo y dispositivos reales: fuentes cargadas, contraste/foco percibido, scroll, navbar expandida/contraída y descarga del CV fuera del panel.
- Teclado virtual móvil, zoom del navegador/texto y alturas extremas. La emulación de viewport no reproduce completamente esos estados.
- Lector de pantalla y anuncio del diálogo no modal. No se verificó tecnología asistiva real.
- Flujo completo frontend/API con `vercel dev` y credenciales Development aprobadas; funcionamiento conversacional en ese entorno. No se probaron servicios de producción.
