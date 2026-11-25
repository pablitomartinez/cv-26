# Decisiones de actualización del portfolio

## Aprobadas

- **Posicionamiento:** Full Stack Developer con enfoque en Frontend.
- **Título principal:** no incluir “Junior”.
- **Diseño:** mantener la identidad visual y el sistema visual existentes; no rediseñar.
- **Idiomas:** mantener español e inglés (ES/EN).
- **Experiencia y formación:** datos validados y reconfirmados para la segunda etapa; integrados en un bloque compacto dentro de About.
- **CV:** preservar el nuevo PDF español provisto por Pablo en `public/Pablo-Martinez-CV.pdf` y su ruta de descarga.
- **Desarrollo asistido por IA:** orquestación de agentes, skills, MCP y revisión de código asistida, como competencia complementaria; no Machine Learning ni AI Engineering.
- **Asistente:** actualizar exclusivamente los datos de conocimiento cuando corresponda; no modificar comportamiento.
- **Restricciones:** no implementar el efecto de anteojos; no inventar URLs, métricas, fechas ni experiencia profesional.

## Pendientes de validación de Pablo

| Decisión/dato | Estado | Condición para resolver |
|---|---|---|
| LinkedIn canónico | Pendiente; bloqueo de publicación | GitHub público usa `pablo-martinez-9b2991233`; web, asistente y PDF usan `pablo-ezequiel-martinez-9b2991233`. Confirmar URL real y alinear canales con autorización. HTTP 999 no demuestra identidad ni inexistencia. |
| CV español | Inconsistencias comprobadas; bloqueo de publicación | Corregir en una tarea autorizada el dominio vencido del Diario y Next.js atribuido al Colegio (React verificado). PDF sin modificar en esta auditoría. |
| Repositorio público de Fernanda Herrera | No accesible (404) | Confirmar acceso o una URL pública antes de volver a mostrar el botón de código. Se conserva la referencia en documentación. |

Pablo confirmó la aprobación de los ocho controles visuales de la primera etapa, incluidos el CV y el acceso al Diario desde incógnito. Esos pendientes quedan resueltos por validación del usuario, no por una nueva comprobación automatizada. Se mantiene el carácter temporal de la URL del Diario.

## Fuente profesional aprobada — primera etapa

- **Resumen:** Full Stack Developer con enfoque en Frontend y experiencia en aplicaciones web para clientes y organizaciones. Desarrollo de interfaces responsivas y soluciones con React, Next.js, TypeScript, APIs REST, Supabase y PostgreSQL.
- **Experiencia:** Full Stack Developer — Ethercode (Freelance), 2022 – Actualidad.
  - Desarrollo y mantenimiento de aplicaciones web para clientes y organizaciones, desde el relevamiento de requerimientos hasta el despliegue.
  - Implementación de autenticación, paneles administrativos e integración de APIs REST para digitalizar procesos de gestión.
- **Formación:** Full Stack Web Developer — Soy Henry, 2023; UX/UI Design — NUCBA, 2024; Licenciatura en Trabajo Social — Universidad Nacional de Jujuy, en curso.
- **Frontend:** React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Responsive Design.
- **Backend y datos:** Node.js, Supabase, PostgreSQL, SQL, APIs REST, autenticación, autorización y RLS.
- **Herramientas:** Git, GitHub, GitHub Actions, Vercel, Figma y revisión de código.
- **IA aplicada al desarrollo:** orquestación de agentes, skills, MCP y revisión de código asistida.
- **Jujuy Conecta:** continúa publicando noticias actuales mediante automatización, según confirmación de Pablo. Se reemplaza el enlace vencido por la URL temporal exacta confirmada; no se presenta como dominio de producción definitivo.

## Decisiones de implementación — primera etapa

- Hero presenta el perfil y una síntesis tecnológica; About desarrolla el proceso de trabajo y aclara que Trabajo Social está en curso, sin repetir el resumen ni crear nuevas secciones.
- Skills conserva las tres columnas: Frontend, Backend y datos, Herramientas. IA se incorpora como subgrupo complementario de Herramientas con menor jerarquía. Se eliminan precisiones no confirmadas de estas listas (App Router, ES6+, Storage, modelado relacional).
- ES/EN conserva claves y significado equivalentes. Metadata inicial española y metadata localizada se alinean, sin modificar canonical ni imágenes sociales.
- Se alinean exclusivamente los datos de perfil, habilidades y proyecto Jujuy Conecta del asistente. No se cambian instrucciones, contratos ni comportamiento.
- Experiencia y formación detalladas quedan para la próxima tarea. `education.ts` ya coincide con lo aprobado; `experience.ts` conserva por ahora la organización genérica “Freelance”: al integrar la experiencia debe alinearse a Ethercode y a las responsabilidades aprobadas.
- No se edita `.build-check/`: es un artefacto histórico versionado que conserva el enlace vencido; no es fuente de la aplicación ni salida del build actual (`dist/`).
- Resultados técnicos y límites de QA registrados en `STAGE-1.md`.

## Decisiones de implementación — segunda etapa

- **Estructura elegida:** un único bloque «Experiencia y formación» dentro de About, en lugar de dos secciones independientes. Permite evaluar cargo, organización, período y formación juntos, con menos encabezados, separaciones y scroll. No se agrega una cronología extensa ni una copia del CV.
- **Navegación:** se conserva `#about` y el menú actual; el bloque pertenece a esa sección y es accesible por scroll también en móvil. No se añade un enlace que sobrecargue el header en anchos intermedios ni un menú móvil nuevo.
- **Sistema visual:** `Career.tsx` reutiliza `SurfaceCard`, tipografías, tokens semánticos de color y bordes laterales existentes. Una columna en móvil/tablet y dos desde `lg`; sin animaciones o dependencias nuevas. No se reutiliza `SectionHeader` porque su h2 de 5xl/7xl no corresponde a un bloque subordinado y compacto.
- **Sin duplicación:** About mantiene presentación y tarjeta de perfil. Responsabilidades y formación se trasladan al nuevo bloque; se retiran los párrafos y las claves `about.product` y `about.background` en ambos idiomas. La introducción conserva únicamente el posicionamiento y la relación entre interfaces, datos y servicios.
- **Contenido:** experiencia y formación reproducen los hechos aprobados, sin añadir tecnologías, métricas, certificaciones ni fechas. En inglés se conserva «Licenciatura in Social Work», sin inferir equivalencias de título.
- **Asistente:** solo cambia `experience.ts`, conservando identificador, estructura, período y tecnologías ya existentes; cargo y organización pasan a «Full Stack Developer» y «Ethercode (Freelance)», con las dos responsabilidades aprobadas. `education.ts` ya coincide. No se modifica lógica, instrucciones, endpoint, contrato ni comportamiento.
- **CV y alcance:** se preserva el PDF español aprobado sin regenerarlo; Hero, Projects, Skills, chatbot, configuración y dependencias no se editan. Resultados técnicos y límites de revisión registrados en `PLAN.md`.

## Decisiones de implementación — tercera etapa

- **Aprobaciones previas:** Pablo revisó y aprobó perfil profesional, experiencia, formación y corrección de la interfaz del chatbot. No se reabren esos cambios ni se modifica el PDF.
- **Catálogo final:** Balance App → Fernanda Herrera → Colegio de Antropólogos → Jujuy Conecta Diario → Papeleta. Mientras Papeleta carezca de ficha validada, se publican solo los cuatro primeros; no se inventa una quinta tarjeta ni se usa Tierra Arcilla para completar el índice.
- **Datos y diseño:** lista ordenada en Projects, mismos componentes de galería/showcase y estilo. Descriptores localizados ES/EN asociados a cada proyecto, sin array paralelo en español. Cuatro columnas desktop para las cuatro fichas actuales; al publicar la quinta deberá actualizarse ese conteo.
- **Balance:** título aprobado y foco Full Stack, autenticación, PostgreSQL, SQL/RPC y RLS. **Fernanda Herrera:** nuevo nombre visible y enfoque responsivo, UX/UI, rendimiento, accesibilidad, SEO y Supabase; sin porcentajes ni puntuaciones de rendimiento.
- **Colegio:** foco en matriculación digital y gestión administrativa; el `package.json` público confirma React (no Next.js), TypeScript, Vite, Tailwind y Supabase. Se resuelve la discrepancia previa del conocimiento del asistente.
- **Diario:** CMS y automatización Python/GitHub Actions; actividad actual respaldada por confirmación de Pablo. Se conserva exactamente la URL temporal aprobada y se identifica su carácter temporal en ES/EN. La consulta automatizada vuelve a terminar en login de Vercel; no invalida ni sustituye la revisión desde incógnito aprobada por el usuario.
- **Papeleta:** colaboración confirmada, sitio público accesible. GitHub web, API y archivo de manifiesto de referencia responden 404 sin autenticación; eso no demuestra que el repositorio no exista. No se infieren tecnologías, autoría individual ni funciones terminadas desde el marketing del sitio. No se copian gráficos del sitio ni se generan imágenes. Se registra conocimiento mínimo con estado pendiente, sin ficha en galería.
- **Tierra Arcilla:** se retira solo de destacados. Se conservan imágenes, traducciones existentes y conocimiento como proyecto anterior. **Villa del Cielo:** fuera de la galería; no se añade su nombre a experiencia ni se necesita ampliar esa sección. AutoDemo AI y Huichaira quedan fuera del alcance.
- **Enlaces:** se omite el enlace público al código de Fernanda Herrera, que devuelve 404; referencia preservada en `STAGE-3.md`. No se inventan reemplazos ni se cambian los demás destinos aprobados.

## Principios para decisiones futuras

### Cierre de Papeleta (posterior a la tercera etapa inicial)

- Ficha aprobada e incorporada en quinto lugar, con textos ES/EN y conocimiento alineado. Los cuatro proyectos previos se mantienen tal como estaban al comenzar este cierre.
- Producto colaborativo, sin autoría exclusiva. Contribuciones confirmadas directamente por Pablo, no por atribución de commits: diseño/UX/UI, Frontend, landing, planificación, autenticación/permisos, funcionalidades, despliegue y mantenimiento.
- Stack aprobado mediante auditoría del repositorio informada por el usuario: Next.js, React, TypeScript, Supabase, PostgreSQL, Mercado Pago y CSS Modules. No Tailwind CSS.
- Mercado Pago presente en código, sin compra completa verificada en producción ni atribución individual a Pablo. Repositorio privado: no mostrar botón de código.
- Galería existente sin cambios; landing y dos vistas móviles reales, omitiendo captura administrativa con datos personales. Selector pasa de cuatro a cinco columnas, sin rediseño. PDF y funcionamiento del asistente intactos.
- Evidencia y límites actuales en `PAPELETA.md`; las decisiones previas se conservan como registro histórico.

### Auditoría definitiva de publicación

- `public/projects/papeleta/1.png` retirado con autorización expresa y sin referencias de código. No está en `public/`, `dist/`, índice ni historial Git alcanzable de esa ruta. No se realiza staging ni commit de recursos privados.
- Notas de pagos/autoría siguen en documentación interna; la ficha pública usa el texto editorial compacto aprobado y tres contribuciones. Galería mantiene proporciones con `object-contain`.
- **NO APTO PARA PUBLICAR** por los pendientes de CV/LinkedIn detallados en `PUBLICATION-AUDIT.md`. No resolverlos mediante URLs inferidas, modificación no autorizada del PDF ni cambios de funcionamiento del asistente.

- Los datos profesionales no se deducen de inconsistencias entre archivos: se consultan y validan.
- Una URL que no pudo verificarse no se presenta como funcional. Los enlaces pendientes se mantienen explícitos.
- El asistente puede tener datos más detallados que la página; publicar esos datos en el portfolio requiere validación independiente.
- Diferencias de longitud entre ES y EN son aceptables si el sentido, los hechos y la jerarquía son equivalentes.
- Cualquier cambio del comportamiento del asistente requiere un alcance y aprobación separados.
