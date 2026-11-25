# Pablo Martinez — Full Stack Developer

Portfolio y CV online de Pablo Martinez.  
Desarrollo de productos digitales con foco en usabilidad, flujos reales y calidad técnica.

Este proyecto funciona como **presentación profesional**, **muestra de trabajo real** y **base evolutiva** para oportunidades laborales como Full Stack Developer con fortaleza en Frontend.

---

## 🚀 Sobre el proyecto

Este portfolio fue diseñado y desarrollado desde cero con una lógica clara:

- Mostrar **experiencia real**, no ejercicios
- Explicar **problemas → soluciones**
- Priorizar **claridad, performance y UX**
- Mantener una base técnica limpia y escalable

No es un template.  
No es un landing genérico.  
Es un producto pensado como carta de presentación profesional.

---

## 🧠 Enfoque

- Componentes reutilizables
- Animaciones sutiles activadas por scroll (no decorativas)
- Tipografía y jerarquía visual como eje
- Diseño orientado a lectura y comprensión, no a impacto vacío
- Código mantenible y fácil de extender

---

## 🛠️ Stack tecnológico

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
- **Intersection Observer** (animaciones por scroll)
- **CSS moderno y variables**

---

## Desarrollo local: frontend y API

`npm run dev` inicia únicamente Vite en el puerto 8080. No ejecuta las funciones de `api/`: un `POST /api/assistant` devuelve 404 en ese servidor aunque funcione en producción. `npm run preview` tampoco ejecuta la API.

Para probar frontend y funciones juntos, el procedimiento recomendado es **Vercel CLI**, con una versión compatible con handlers Web Standard (`export default { fetch }`). Con la CLI ya disponible y autorizada, desde la raíz:

```sh
vercel link
vercel dev --listen 3000
```

- Vincular al **proyecto existente** y al equipo correcto; no crear otro proyecto ni ejecutar un despliegue. Si ya está vinculado, omitir `vercel link`.
- Abrir `http://localhost:3000` (o la URL que informe Vercel), **no el puerto interno 8080 de Vite**. Vercel enruta `/api/assistant` y sirve el frontend bajo el mismo origen, sin modificar el endpoint ni añadir un proxy.
- Usar las variables autorizadas del entorno **Development**: `OPENAI_API_KEY`, `OPENAI_MODEL`, `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`. Nunca anteponer `VITE_` a secretos ni copiarlos a documentación, logs o Git. No descargar ni sobrescribir archivos de entorno sin aprobación.
- La vinculación puede crear `.vercel/` y ajustar `.gitignore`: revisar estos cambios y no versionar datos locales ni secretos. No se ejecutó la CLI ni se modificaron variables/configuración durante esta auditoría.
- Si la CLI no está disponible, su instalación o ejecución mediante `npx` requiere autorización previa; no es una nueva dependencia del portfolio ni se necesita una instalación global para el código de la aplicación.

Comprobación inicial sin invocar proveedores: `GET /api/assistant` debe devolver **405** y `POST` con JSON `{}` debe devolver **400**, ambos en formato JSON. Después, con credenciales de desarrollo aprobadas, probar una pregunta desde la interfaz; utiliza servicios externos y está sujeta al rate limiting existente.

Procedimiento propuesto, pendiente de ejecución con Vercel. Ver [auditoría del asistente](docs/assistant-ui-audit.md) y [documentación oficial de `vercel dev`](https://vercel.com/docs/cli/dev).

---

## 📂 Proyectos destacados

El catálogo implementado comprende **cinco fichas destacadas**, en este orden. Auditoría definitiva: **NO APTO PARA PUBLICAR** hasta resolver las inconsistencias de CV y confirmar el LinkedIn canónico; ver [informe de publicación](docs/portfolio-update/PUBLICATION-AUDIT.md).

| Orden | Proyecto | Enfoque aprobado |
|---|---|---|
| 1 | [Balance App](https://balance-app-indol.vercel.app/) | Arquitectura Full Stack, autenticación, PostgreSQL, SQL/RPC, RLS y finanzas compartidas. |
| 2 | [Fernanda Herrera](https://www.asesoramientotesis.com/) | Interfaces responsivas, UX/UI, rendimiento, accesibilidad, SEO e integración con Supabase. Sin métricas de mejora atribuidas. |
| 3 | [Colegio de Antropólogos](https://www.colegioantropologiajujuy.com.ar/) | Digitalización de la matriculación y gestión administrativa; autenticación, panel y seguimiento de trámites. |
| 4 | [Jujuy Conecta Diario](https://diario-jujuyconecta-six.vercel.app/) | CMS y automatización del procesamiento/publicación de noticias con Python y GitHub Actions. Continúa publicando noticias actuales, según confirmación de Pablo. URL pública temporal aprobada; la consulta automatizada redirige al login de Vercel. |
| 5 | [Papeleta — Plataforma de invitaciones digitales](https://papeleta.com.ar/) | Producto digital colaborativo: editor, previsualización, invitados, confirmaciones y administración. |

Papeleta utiliza Next.js, React, TypeScript, Supabase, PostgreSQL, Mercado Pago y CSS Modules (sin Tailwind CSS), según la auditoría del repositorio informada y aprobada por Pablo. Sus contribuciones confirmadas directamente son diseño y UX/UI, Frontend, landing page, planificación del producto, autenticación y permisos, definición de funcionalidades, despliegue y mantenimiento, dentro del equipo y sin autoría exclusiva. El historial Git no permite atribuirle commits individuales. Mercado Pago existe en el código, pero no se verificó una compra completa en producción ni se atribuye su implementación individual a Pablo. El repositorio es privado y no se muestra botón de código.

La galería reutiliza `2.jpeg`, `3.png` y `4.png` de `public/projects/papeleta/`, con alt ES/EN y `object-contain`. La captura administrativa `1.png` fue retirada con autorización expresa: sin referencias activas, ausente del build regenerado, del índice Git y del historial alcanzable de esa ruta. No debe volver a incorporarse.

Tierra Arcilla queda como proyecto anterior en el conocimiento del asistente, fuera de la galería; se conservan sus recursos gráficos. El repositorio de referencia de Fernanda Herrera también devuelve 404 sin autenticación: se conserva la referencia documental, pero no se muestra un botón de código hacia ese destino.

Fuentes y validaciones históricas: [tercera etapa](docs/portfolio-update/STAGE-3.md). Incorporación final y QA de Papeleta: [cierre de Papeleta](docs/portfolio-update/PAPELETA.md).

---

## 🎯 Objetivo profesional

Busco oportunidades profesionales como **Full Stack Developer**, con una fortaleza clara en Frontend.

Aporto:
- Experiencia construyendo productos reales
- Mirada de usuario y de proceso
- Capacidad de diseñar, desarrollar y mejorar sistemas completos
- Comunicación clara y enfoque práctico

---

## 🌍 Ubicación

Argentina — Disponible para trabajo remoto.

---

## 📬 Contacto

- Portfolio: https://cv-26-pm.vercel.app/
- LinkedIn: https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/
- Email: pablo.emartinez.dev@gmail.com

---

## 📌 Nota final

Este proyecto está en evolución constante.  
No busca ser perfecto, sino **honesto, funcional y profesional**.

Si llegaste hasta acá revisando el código:  
gracias por tomarte el tiempo.
