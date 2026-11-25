# Tercera etapa — catálogo profesional

> Registro histórico de la etapa inicial con cuatro fichas. Los pendientes de contenido de Papeleta se resolvieron posteriormente y la captura privada `1.png` fue retirada con autorización. Estado definitivo y bloqueos actuales de CV/LinkedIn en [PUBLICATION-AUDIT.md](PUBLICATION-AUDIT.md).

## Resultado y alcance

Catálogo aprobado por Pablo: **Balance App → Fernanda Herrera → Colegio de Antropólogos → Jujuy Conecta Diario → Papeleta**. Se publican los cuatro primeros, en ese orden. Papeleta permanece pendiente, conforme a la instrucción de no publicar una ficha sin datos y recursos validados. La actualización no se presenta como cinco fichas terminadas.

Pablo aprobó previamente perfil profesional, experiencia, formación y corrección de la interfaz del chatbot. Esta etapa no vuelve a modificar esos componentes ni el PDF. No se añaden dependencias ni se realizan commits, pushes, cambios de rama u operaciones sobre stashes. El árbol estaba limpio al comenzar, en `feature/actualizacion-portfolio-profesional`.

## Cambios de contenido

- **Balance App:** arquitectura Full Stack y finanzas compartidas, autenticación, PostgreSQL, SQL/RPC y RLS. Se conservan funcionalidades, imágenes y enlaces existentes.
- **Fernanda Herrera:** nombre visible aprobado y descripción de interfaces responsivas, UX/UI, rendimiento, accesibilidad, SEO y Supabase. Se expresan enfoques, no resultados cuantificados. Se reutiliza `/projects/3.png`, que muestra el sitio de Fernanda Herrera en escritorio y móvil; no se inventa una imagen nueva.
- **Colegio de Antropólogos:** digitalización de matriculación y gestión administrativa, manteniendo autenticación, panel, trámites y consulta pública. Se retira del problema la precisión anterior de «semanas» y oportunidades perdidas; no se añaden métricas.
- **Jujuy Conecta Diario:** CMS, panel editorial y automatización del procesamiento/publicación con Python y GitHub Actions. La continuidad de noticias actuales procede de la confirmación de Pablo, no de una nueva prueba de publicación. La URL temporal exacta se conserva y se etiqueta en ES/EN.
- **Tierra Arcilla:** fuera del selector y showcase. Permanecen sus cuatro PNG en `public/projects/ta/`, las traducciones existentes y su conocimiento como proyecto anterior.
- **Otros:** no se incorporan Villa del Cielo, AutoDemo AI ni Huichaira, ni se publica el nombre de ningún cliente hotelero. No es necesario ampliar experiencia en esta tarea.

## Integración visual y conocimiento

`Projects.tsx` conserva el showcase, alternancia de columnas, galería, detalle móvil, navegación, animaciones y estilos existentes. Solo cambia la fuente de datos: lista ordenada directa en lugar de categorías que ya no se mostraban. Cada proyecto lleva su descriptor localizado, evitando el array paralelo en español y su posible desalineación. El índice desktop usa cuatro columnas para las fichas disponibles; al habilitar Papeleta deberá pasar a cinco.

Únicamente cambia `api/_lib/assistant/projects.ts` en el asistente. Los primeros cuatro proyectos se marcan como destacados publicados y se ordenan igual que la web; Papeleta se identifica como colaboración pendiente de ficha, sin tecnologías ni responsabilidades individuales inferidas; Tierra Arcilla se identifica como anterior/no destacada. Se preservan los identificadores existentes. No se modifica el serializador, instrucciones, modelo, endpoint, rate limiting, contrato, interfaz o lógica conversacional.

## Verificación pública de fuentes y enlaces

Consulta sin autenticación del **25 de noviembre de 2026**. Un HTTP 200 de una SPA no demuestra que funcionen sus formularios, autenticación ni integraciones privadas.

| Destino | Resultado observado | Decisión |
|---|---|---|
| `https://balance-app-indol.vercel.app/` | 200; landing pública de finanzas compartidas | Conservar. |
| `https://github.com/pablitomartinez/balance-app/` | 200 | Conservar. |
| `https://www.asesoramientotesis.com/` | 200; sitio SPA | Conservar. Texto Supabase/UX/UI/rendimiento/accesibilidad respaldado por el pedido aprobado, sin auditoría de métricas. |
| `https://github.com/ethercode-tech/fernanda-herrera-asesoramiento-tesis` | 404 sin autenticación; manifiesto vía API también 404 | Conservar referencia aquí; omitir botón de código y enlace en datos del asistente hasta confirmar acceso/URL pública. No se concluye que el repositorio no exista. |
| `https://www.colegioantropologiajujuy.com.ar/` | 200; sitio SPA | Conservar. |
| `https://github.com/ethercode-tech/antropolog-a-digital` | 200; `main/package.json` y API accesibles | Confirma React, TypeScript, Vite, Tailwind y Supabase. No hay dependencia Next.js en el manifiesto; se resuelve la discrepancia previa del asistente. |
| `https://diario-jujuyconecta-six.vercel.app/` | Redirige a `https://vercel.com/login`, que devuelve 200 | Conservar URL temporal exacta aprobada y registrar el límite de la comprobación automática. Acceso desde incógnito y actividad actual confirmados por Pablo. No cambiar infraestructura. |
| `https://github.com/altiora-software/diario-jujuyconecta` | 200 | Conservar. |
| `https://papeleta.com.ar/` | 200; sitio público de invitaciones digitales | URL confirmada. No se deduce el stack ni se validan flujos privados desde su marketing. |
| `https://github.com/Aleemendoza/invitacionesDigitales` | 404 sin autenticación | Ficha pendiente; no publicar un enlace de código no comprobable. |

Evidencia técnica del Colegio: [manifiesto público](https://github.com/ethercode-tech/antropolog-a-digital/blob/main/package.json), blob SHA `9b467e2507265a91b86dbb687867faa35130cbcd` devuelto por la API de contenidos. PostgreSQL ya figuraba en las fuentes del portfolio; no se deduce una contribución individual del manifiesto.

## Papeleta — datos confirmados y pendientes

**Confirmado por Pablo:** plataforma de invitaciones digitales, desarrollo colaborativo y participación del usuario; nombre, URL pública y repositorio de referencia. **Comprobado:** sitio público accesible, sin uso de cuentas ni pagos.

**Información técnica verificable mediante el repositorio: ninguna en esta revisión.** El acceso web, `api.github.com/repos/Aleemendoza/invitacionesDigitales` y `raw.githubusercontent.com/Aleemendoza/invitacionesDigitales/main/package.json` devuelven 404 sin autenticación. No se infieren tecnologías desde los scripts del sitio ni se confunde publicidad de funcionalidades con evidencia de implementación completa.

Antes de publicar, Pablo debe proporcionar o validar:

1. Acceso de lectura autorizado o extractos no sensibles del repositorio: manifiesto, arquitectura y archivos relevantes. Alternativamente, una ficha técnica validada; no enviar credenciales ni secretos.
2. Rol y contribuciones individuales concretas dentro del equipo: qué desarrolló, mantuvo o integró Pablo, sin atribuirle el trabajo completo. Fechas solo si desea publicarlas y las confirma.
3. Funciones realmente terminadas y publicadas frente a prototipos, pendientes y planes futuros. Redacción aprobada del problema/solución y stack respaldado.
4. Capturas reales aprobadas: al menos una portada compatible con la galería 16:9 existente; idealmente vistas adicionales de escritorio/móvil. Elegir orden, leyendas/textos alternativos y autorización de uso. Anonimizar invitados, eventos y datos personales no autorizados.
5. Confirmar si el repositorio debe enlazarse públicamente o permanecer privado; no se requiere publicar el código para mostrar una ficha futura.

No se descargan imágenes comerciales del sitio, no se reutilizan capturas ajenas ni se generan sustitutos. No existe carpeta de recursos de Papeleta en `public/projects/` al cierre de esta etapa.

## Validaciones ejecutadas

| Control | Resultado |
|---|---|
| `npm run build` | Exitoso; JavaScript 740.92 KB / 248.92 KB gzip. Avisos preexistentes: Browserslist y chunk mayor a 500 KB. |
| `node --test tests/*.test.mjs` | **7/7**, 0 fallos. Mensajes del proveedor esperados en casos negativos. |
| `npm run lint`, antes/después | **16 errores y 8 advertencias**, mismos archivos/líneas preexistentes; ninguno nuevo en los archivos tocados. |
| Paridad recursiva ES/EN | **129 claves equivalentes**; cinco nuevas: cuatro descriptores y estado temporal del Diario. |
| Contenido fuera de Projects en locales | Comparado con HEAD: idéntico. Español inicial/fallback intactos. |
| Datos de proyectos | Orden de las cuatro fichas, tecnologías y enlaces alineados con el conocimiento; Papeleta pendiente sin stack y Tierra Arcilla anterior. |
| Imágenes | Diez PNG válidos en las cuatro fichas, con títulos/alt localizados y cargados en navegador. Cuatro PNG de Tierra Arcilla preservados por hash de blob Git. |
| PDF | Blob Git idéntico a HEAD y contenido idéntico a `dist/Pablo-Martinez-CV.pdf`; no se regenera ni modifica. |
| `git diff --check` | Sin errores; posibles avisos de conversión futura LF/CRLF de la configuración existente. |

**Navegador ejecutado:** Edge headless instalado, vía Chrome DevTools Protocol y WebSocket nativo de Node, sin instalar herramientas. Matriz de **375×667, 768×700 y 1440×900 × ES/EN × claro/oscuro** (12 combinaciones). Se verificó orden de los cuatro selectores, selección con foco/Enter, `aria-pressed`, descriptor traducido, cambio al proyecto correcto, carga de las diez imágenes, ausencia de desborde horizontal de Projects y detalle expandible móvil. Fernanda solo muestra el enlace público al sitio, no un enlace de código 404.

Scripts de comprobación temporales fuera del repositorio. El navegador de auditoría bloqueó HTTPS externo, incluidas fuentes y analítica; no se enviaron mensajes al chatbot ni se probaron servicios de producción.

**Pendiente manual:** revisión visual con fuentes remotas cargadas, dispositivos reales, lector de pantalla y valoración del ritmo/legibilidad de los nuevos textos en ambos idiomas/temas. No se volvieron a probar formularios de los proyectos, flujos con sesión, pagos ni integraciones externas. La publicación de la quinta ficha continúa bloqueada por los pendientes de Papeleta, no por build o pruebas.
