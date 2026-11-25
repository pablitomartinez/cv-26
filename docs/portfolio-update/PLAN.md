# Plan de actualización del portfolio

## Propósito y alcance

Preparar una actualización profesional del portfolio para oportunidades como Frontend Developer, React Developer o Full Stack Developer. El posicionamiento aprobado es **Full Stack Developer con enfoque en Frontend**. Se conserva el diseño existente y el soporte ES/EN; se incorporan experiencia y formación de manera compacta, se actualiza el CV en español y se suma desarrollo asistido por IA como competencia complementaria.

La planificación original organiza el trabajo. La primera etapa de implementación autoriza Hero, About, Skills, ES/EN, enlace confirmado de Jujuy Conecta, metadata y datos asociados del asistente. No autoriza cambiar su comportamiento, rediseñar el portfolio ni inferir datos profesionales o URLs. Ver `STAGE-1.md`.

La primera etapa fue aprobada por Pablo tras los ocho controles visuales, incluidos responsive, internacionalización, CV y acceso al Diario desde incógnito. La segunda etapa incorpora exclusivamente experiencia y formación aprobadas, su integración compacta en About, traducciones y alineación de los datos de experiencia del asistente. Sin nuevos proyectos, cambios de rama, commits, pushes ni operaciones sobre stashes.

## Dependencias y decisiones previas

Antes de editar contenido deben estar resueltos:

1. Inventario final de proyectos que se mostrarán y datos de cada proyecto (descripción, stack, recursos, repositorio y estado).
2. Fechas, cargos, organizaciones, responsabilidades y formación profesional que Pablo valide.
3. URL Vercel para Jujuy Conecta: Pablo confirmó `https://diario-jujuyconecta-six.vercel.app/` como destino temporal asociado a develop; el dominio `diario.jujuyconecta.com` venció. El acceso sin sesión fue aprobado por Pablo desde incógnito al cerrar la primera etapa, resolviendo la revisión manual pendiente.
4. Redacción aprobada para desarrollo asistido por IA y confirmación de datos del CV en español.

Perfil, experiencia, formación y competencia de IA fueron aprobados (ver `DECISIONS.md`). Al iniciar la tercera etapa, Pablo aprobó también las integraciones de experiencia/formación y la corrección de la interfaz del chatbot. El pedido posterior resolvió los datos de Papeleta: la quinta ficha está incorporada. La captura privada se retiró con autorización durante la auditoría definitiva. Estado actual: **NO APTO PARA PUBLICAR** por inconsistencias de CV y LinkedIn; ver `PUBLICATION-AUDIT.md`. No publicar información pendiente ni recursos personales sin anonimizar.

## Incrementos de implementación

| ID | Incremento | Archivos probables | Dependencia |
|---|---|---|---|
| A | Cerrar inventario y ficha fuente de contenido aprobada | `docs/portfolio-update/DECISIONS.md`, datos validados por Pablo | Ninguna; necesita confirmación humana |
| B | Alinear textos profesionales del Hero, About, habilidades y contacto en ES/EN | `src/i18n/locales/*.json`, componentes que tengan contenido literal | A |
| C | Diseñar e integrar bloques compactos de experiencia y formación manteniendo el sistema visual | `src/pages/Index.tsx`, componentes y traducciones | Fechas y datos validados (A) |
| D | Alinear catálogo de proyectos, tecnologías, enlaces y recursos con el inventario final | `src/components/Projects.tsx`, locales y recursos aprobados | Inventario y URL confirmados (A) |
| E | Actualizar solo los módulos de datos profesionales del conocimiento del asistente | `api/_lib/assistant/{profile,experience,education,skills,projects}.ts` | Datos validados (A); no tocar comportamiento |
| F | Actualizar el CV en español y comprobar correspondencia con el portfolio | `public/Pablo-Martinez-CV.pdf`, enlace en `src/components/Header.tsx` si fuera necesario | Contenido aprobado (B–E) |
| G | Revisar metadatos, accesibilidad, responsive y recursos | `index.html`, `src/i18n/metadata.ts`, componentes y `public/` | B–F |
| H | QA, revisar diff y cerrar checklist | Archivos modificados | A–G |

Cada incremento debe ser pequeño, revisable y con criterios de aceptación propios. Evitar mezclar decisiones de contenido con refactors visuales.

## Validaciones por incremento

- Revisar diff y alcance antes de completar cada tarea.
- Mantener pares de traducción equivalentes y estructura de claves ES/EN.
- Verificar archivos de recursos y enlaces sin inventar reemplazos.
- Mantener intactos endpoint, instrucciones, modelo, rate limiting, interfaz y comportamiento del asistente.
- Al completar implementación, ejecutar las verificaciones pertinentes disponibles: lint, build, pruebas existentes, revisión de PDF, viewport y accesibilidad; anotar controles no ejecutados y motivo.

Consultar `CHECKLIST.md` para seguimiento y `DECISIONS.md` para decisiones y asuntos pendientes.

## Segunda etapa — implementación y validación

- Incremento C implementado: `src/components/Career.tsx` integra experiencia y formación en un único bloque dentro de About. Una columna por defecto y dos desde `lg`, sin altura mínima propia, animaciones ni dependencias nuevas.
- About conserva su título, tarjeta de perfil y navegación `#about`. Su introducción se acorta y los detalles de responsabilidades/formación se trasladan al bloque para evitar duplicaciones.
- Incremento E acotado: `api/_lib/assistant/experience.ts` alinea organización, cargo y responsabilidades con Ethercode y los datos aprobados. `education.ts` ya coincide y no se edita. PDF español y ruta de descarga intactos.
- `npm run build`: exitoso. Persisten los avisos preexistentes de Browserslist y chunk mayor a 500 KB. JavaScript: 742.76 KB / 249.43 KB gzip.
- `node --test tests/*.test.mjs`: 7/7 aprobadas, 0 fallos. Los mensajes del proveedor corresponden a escenarios negativos de las pruebas.
- `npm run lint`: 16 errores y 8 advertencias, idénticos a la referencia comprobada antes de editar; ninguno en los archivos de implementación modificados o creados.
- Comparación recursiva ES/EN: 124 claves equivalentes; 17 claves nuevas bajo `career`, introducción de About actualizada y dos claves redundantes retiradas en ambos idiomas.
- Render estático React ES/EN del componente: los 17 textos aparecen traducidos; sección etiquetada y jerarquía h3/h4/h5 comprobadas. No sustituye pruebas visuales ni de tecnología asistiva en navegador.
- `git diff --check`: sin errores; avisos de conversión futura LF/CRLF propios de la configuración existente.
- PDF idéntico a HEAD y a la copia en `dist/`; SHA-256 aprobado preservado: `806674F36529B70C7E863AA9C72B0024B059B234D915DD7BE1398F24E485F64A`.
- Pendiente: revisión visual de esta segunda etapa en móvil/escritorio, ES/EN y claro/oscuro; comprobar ritmo de About, ajuste de títulos y ausencia de desbordes. No se ejecutó navegador en esta etapa.

## Tercera etapa — catálogo aprobado

- Incrementos D/E: Balance App, Fernanda Herrera, Colegio de Antropólogos y Jujuy Conecta Diario, en ese orden; Papeleta será quinta cuando se cierre su ficha. Se retira Tierra Arcilla de destacados sin borrar recursos.
- Projects conserva showcase, galería, navegación y patrones visuales. Los datos se ordenan en una lista directa, sin las categorías que ya no se renderizaban; cada descriptor pasa a su propia traducción. El índice desktop usa cuatro columnas mientras hay cuatro fichas publicadas.
- Se actualiza únicamente `api/_lib/assistant/projects.ts`: cuatro destacados alineados, Papeleta como colaboración pendiente de ficha y Tierra Arcilla como proyecto anterior. Sin cambios de comportamiento, endpoint o instrucciones.
- README y documentación distinguen catálogo aprobado de fichas publicadas. Villa del Cielo, AutoDemo AI y Huichaira no se incorporan; no se publica ningún nombre nuevo de cliente hotelero.
- La tercera etapa no vuelve a editar Hero, About, Career, Skills, header ni chatbot. El PDF se preserva. Sin dependencias, cambios de rama, commits, pushes ni operaciones sobre stashes.
- Evidencia, pendientes y validaciones de esta etapa: `STAGE-3.md`.

## Cierre del quinto proyecto — Papeleta

- Completar D/E con los datos aprobados del pedido: ficha quinta, recursos reales, ES/EN y únicamente `projects.ts` del conocimiento del asistente.
- Mantener los otros cuatro proyectos, galería, PDF, dependencias y comportamiento del asistente. Índice de cinco columnas conservando el patrón responsive existente.
- README, decisiones y checklist actualizados; QA y bloqueo de privacidad antes de publicar registrados en `PAPELETA.md`. Sin commits ni pushes.

## Auditoría definitiva de publicación — 25 de noviembre de 2026

- Alcance cerrado: retirar únicamente la captura privada no referenciada y actualizar documentación; sin cambios funcionales, estéticos, PDF, dependencias ni comportamiento del asistente.
- Retiro autorizado completado, build limpio de ese recurso y ruta sin seguimiento ni historial Git alcanzable.
- Build exitoso, asistente 7/7, ESLint 16 errores/8 advertencias sin regresiones, 139 claves ES/EN y matriz de producción de 16 combinaciones aprobada, incluyendo apertura/cierre del chatbot.
- **NO APTO PARA PUBLICAR**: el PDF todavía enlaza al dominio vencido del Diario y atribuye Next.js al Colegio; además, el LinkedIn del README público de GitHub difiere del utilizado en el repositorio/PDF. No se infiere el perfil real desde HTTP 999 ni se corrige el PDF sin alcance aprobado.
- Evidencia, límites, riesgos de privacidad residuales y condiciones para levantar el bloqueo en `PUBLICATION-AUDIT.md`.
