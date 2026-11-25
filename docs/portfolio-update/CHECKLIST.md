# Checklist de actualización del portfolio

## Preparación y validación

- [x] Confirmar inventario final y orden de cinco proyectos (Papeleta incorporada en el cierre posterior).
- [ ] Confirmar descripciones, participación, tecnologías y recursos de cada proyecto.
- [x] Confirmar URL exacta de Vercel de Jujuy Conecta (temporal, asociada a develop); acceso desde incógnito aprobado por Pablo al cerrar la primera etapa.
- [x] Validar fechas, cargo, organización y responsabilidades de experiencia.
- [x] Validar formación, fechas/años y estado de cada programa.
- [x] Aprobar redacción de la competencia complementaria de desarrollo asistido por IA.
- [ ] Confirmar datos de contacto y enlaces profesionales vigentes.

## Contenido e interfaz

- [x] Actualizar posicionamiento a Full Stack Developer con enfoque en Frontend; mantener “Junior” fuera del título principal.
- [ ] Mantener afirmaciones verificables y consistentes en Hero, About, Skills, proyectos, contacto y metadata.
- [x] Incorporar experiencia y formación de manera compacta, con fechas validadas.
- [x] Alinear ES/EN para textos nuevos y modificados.
- [x] Mantener el diseño existente; no implementar efecto de anteojos ni rediseño.

## Proyectos y asistente

- [x] Completar las cinco fichas del catálogo aprobado; ver cierre en `PAPELETA.md`.
- [x] Verificar enlaces públicos y repositorios de las fichas actuales; registrar 404/login y no inventar reemplazos (ver `STAGE-3.md`).
- [x] Verificar recursos de las cinco fichas y conservar imágenes de Tierra Arcilla; Papeleta usa tres capturas reales con alt ES/EN.
- [x] Actualizar exclusivamente datos del asistente: perfil, habilidades y enlace/estado de Jujuy Conecta en la primera etapa; experiencia Ethercode en la segunda. Formación ya alineada, sin cambios.
- [x] Confirmar que no cambiaron prompts, endpoint, modelo, proveedor/API, rate limiting, interfaz ni comportamiento del asistente.

## CV y QA

- [x] Preservar el PDF español provisto por Pablo y la ruta de descarga (sin editarlo).
- [x] Revisar render/apertura del PDF y coincidencia con portfolio (aprobación de Pablo al cerrar la primera etapa; archivo preservado en la segunda).
- [ ] Revisar responsive en móvil y escritorio para los componentes tocados.
- [ ] Revisar semántica, etiquetas, texto alternativo, nombres accesibles y foco.
- [ ] Revisar metadata, canonical, Open Graph, Twitter y recursos SEO afectados.
- [x] Ejecutar lint, build y pruebas existentes; resultados comparados con referencia en `STAGE-1.md`.
- [ ] Inspeccionar `git diff --check`, `git diff` y `git status -sb` antes de cualquier commit.
- [ ] Confirmar que no hay secretos ni archivos fuera del alcance.

## Segunda etapa — controles específicos

- [x] Reconfirmar experiencia Ethercode y las tres formaciones con los datos aprobados del pedido.
- [x] Integrar `Career` en About reutilizando `SurfaceCard`, tokens y tipografías; sin rediseñar las secciones protegidas.
- [x] Evitar duplicación de responsabilidades y formación en los párrafos de About.
- [x] Conservar navegación `#about`, sin enlaces internos nuevos ni cambios en el header.
- [x] Validar paridad de 124 claves ES/EN y render estático de los 17 textos nuevos en ambos idiomas.
- [x] Revisar semántica en código/render: sección etiquetada, h3/h4/h5 y listas; sin controles ni animaciones nuevas.
- [x] Ejecutar build exitoso y pruebas del asistente 7/7.
- [x] Comparar ESLint antes/después: mismos 16 errores y 8 advertencias preexistentes; ninguno nuevo.
- [x] Preservar PDF aprobado y descarga; comprobar igualdad con Git y copia del build.
- [x] Revisar diff, `git diff --check` y estado; sin secretos ni modificaciones fuera del alcance.
- [x] Mantener rama y stashes; sin commits, pushes, dependencias ni cambios de comportamiento del asistente.
- [x] Revisar en navegador móvil/escritorio, ES/EN y claro/oscuro: integración de About, experiencia y formación aprobada por Pablo antes de iniciar la tercera etapa.
- [ ] Comprobar navegación por teclado y lectura con tecnología asistiva en el contexto de la página.

Los controles visuales de la primera y segunda etapa, junto con la corrección de la interfaz del chatbot, fueron aprobados por Pablo. No se atribuye a esa aprobación una prueba específica con lector de pantalla. Validaciones y límites históricos detallados en `PLAN.md`.

## Tercera etapa — controles específicos

- [x] Registrar aprobación de Pablo de contenido profesional, experiencia, formación e interfaz del chatbot de las etapas anteriores.
- [x] Publicar en orden Balance App, Fernanda Herrera, Colegio de Antropólogos y Jujuy Conecta Diario; quinta ficha retenida por datos/recursos faltantes.
- [x] Actualizar textos ES/EN y descriptores; sin métricas, tecnologías ni contribuciones individuales inventadas.
- [x] Retirar Tierra Arcilla solo de destacados; conservar recursos y diferenciarla como proyecto anterior en el asistente.
- [x] Registrar Papeleta como colaboración con ficha pendiente, sin stack inferido ni apropiación del desarrollo completo.
- [x] Mantener URL temporal exacta del Diario y actividad actual confirmada por Pablo.
- [x] Mantener fuera de la galería Villa del Cielo, AutoDemo AI y Huichaira; sin publicar nombre de cliente hotelero.
- [x] Modificar solo datos de proyectos del asistente, sin tocar la interfaz ni su funcionamiento.
- [x] Completar ficha de Papeleta con stack auditado y participación individual confirmada por Pablo, sin autoría exclusiva ni compra de producción atribuida.
- [x] Incorporar landing y dos vistas móviles reales con portada y textos alternativos ES/EN; no enlazar captura administrativa con correos.
- [x] Incorporar Papeleta en quinto lugar y adaptar índice a cinco columnas.
- [x] Retirar con autorización `public/projects/papeleta/1.png`; verificar ausencia en public, build regenerado, índice e historial Git alcanzable de la ruta.
- [x] Completar validaciones técnicas de la tercera etapa: build, asistente 7/7, ESLint sin regresiones, 129 claves ES/EN, recursos/PDF preservados y diff sin errores; resultados en `STAGE-3.md`.
- [x] Probar Projects en Edge headless: móvil/tablet/escritorio, ES/EN y claro/oscuro (12 combinaciones), selección por teclado, imágenes y ausencia de desbordes.
- [ ] Revisar visualmente los nuevos textos con fuentes cargadas y en dispositivos reales; lector de pantalla no ejecutado.

## Auditoría definitiva de publicación

- [x] Auditar cinco destacados, 13 imágenes y enlaces web/asistente alineados.
- [x] Retirar la captura privada autorizada sin referencias activas; no incorporarla a Git ni al build.
- [x] Inspeccionar recursos gráficos públicos y metadatos en la auditoría anterior; cerrar la duda sobre los datos de Balance y Papeleta mediante confirmación expresa del usuario de que son demostrativos.
- [x] Confirmar que las capturas de Balance y Papeleta contienen datos de demostración, según Pablo; sin alterar recursos.
- [x] Leer el nuevo PDF español de una página y verificar directamente sus siete anotaciones URI; hash idéntico entre public/build y distinto de HEAD por el reemplazo realizado por Pablo.
- [x] Verificar el PDF corregido de Google Docs: Diario con `https://diario-jujuyconecta-six.vercel.app/`; Colegio con React, Vite, TypeScript, Tailwind CSS, Supabase y PostgreSQL. Sin edición del PDF en este cierre.
- [x] Comparar LinkedIn de Contact, Footer, README, asistente y PDF: idénticos dentro del repositorio.
- [x] Confirmar LinkedIn canónico `https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/` y GitHub `https://github.com/pablitomartinez`, según Pablo; coinciden en web, README local, asistente y nuevo PDF.
- [x] Registrar visibilidad pública de LinkedIn corregida según confirmación del usuario; HTTP 999 sigue impidiendo comprobarla automáticamente.
- [ ] Alinear LinkedIn en el canal externo de GitHub: la nueva consulta aún muestra el slug anterior en el README público (dos enlaces) y en el enlace social del perfil. No se modifica ese canal remoto.
- [x] Comparar perfil, experiencia, formación, stacks y enlaces de proyectos con conocimiento del asistente.
- [x] Paridad recursiva ES/EN: 139 claves; límites editoriales de los cinco proyectos respetados.
- [x] Probar build de producción en Edge: 390×844, 768×900, 1280×720 y 1440×900, ES/EN y claro/oscuro (16 combinaciones).
- [x] Abrir/cerrar chatbot por botón, reabrir con Enter, cerrar con Escape y verificar restitución de foco, visibilidad y ausencia de interferencia con navbar.
- [x] Ejecutar build de producción, pruebas del asistente 7/7 y ESLint sin regresiones frente a 16 errores/8 advertencias.
- [x] Inspeccionar diff, estado y `git diff --check`; sin commits ni pushes.
- [x] Reejecutar `npm run build` (exitoso), `node --test tests/*.test.mjs` (7/7) y `git diff --check` (sin errores; avisos LF/CRLF). No repetir lint ni pruebas visuales fuera del alcance solicitado.
- [x] Reconfirmar ausencia de `public/projects/papeleta/1.png` en public/build, índice e historial Git alcanzable, sin referencias activas en src/api.
- [x] Verificar la URI del Diario en PDF/web/asistente; la consulta automática sigue terminando en login de Vercel. No certificar acceso anónimo actual ni modificar infraestructura; aprobación previa de incógnito preservada.
- [x] Emitir veredicto final **NO APTO PARA PUBLICAR** para el cierre integral: PDF y privacidad resueltos, pero persiste la inconsistencia externa de LinkedIn. Evidencia y condición restante en `PUBLICATION-AUDIT.md`; sin cambios adicionales, commits ni pushes.
