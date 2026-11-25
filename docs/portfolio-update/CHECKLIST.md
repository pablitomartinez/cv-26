# Checklist de actualización del portfolio

## Preparación y validación

- [ ] Confirmar inventario final de proyectos.
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

- [ ] Alinear catálogo visible con el inventario aprobado.
- [ ] Verificar enlaces públicos y repositorios; marcar estados no comprobables.
- [ ] Verificar imágenes y recursos asociados.
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
- [ ] Revisar en navegador móvil/escritorio, ES/EN y claro/oscuro: ritmo de About, títulos, tamaño del bloque y desbordes.
- [ ] Comprobar navegación por teclado y lectura con tecnología asistiva en el contexto de la página.

Los ocho controles visuales de la primera etapa fueron aprobados por Pablo. Los pendientes visuales de esta lista corresponden a la nueva integración; el render estático y el build no los sustituyen. Validaciones y límites detallados en `PLAN.md`.
