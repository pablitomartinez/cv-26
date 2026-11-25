# Decisiones de actualización del portfolio

## Aprobadas

- **Posicionamiento:** Full Stack Developer con enfoque en Frontend.
- **Título principal:** no incluir “Junior”.
- **Diseño:** mantener la identidad visual y el sistema visual existentes; no rediseñar.
- **Idiomas:** mantener español e inglés (ES/EN).
- **Experiencia y formación:** datos validados en la primera etapa; crear bloques compactos en la siguiente tarea.
- **CV:** preservar el nuevo PDF español provisto por Pablo en `public/Pablo-Martinez-CV.pdf` y su ruta de descarga.
- **Desarrollo asistido por IA:** orquestación de agentes, skills, MCP y revisión de código asistida, como competencia complementaria; no Machine Learning ni AI Engineering.
- **Asistente:** actualizar exclusivamente los datos de conocimiento cuando corresponda; no modificar comportamiento.
- **Restricciones:** no implementar el efecto de anteojos; no inventar URLs, métricas, fechas ni experiencia profesional.

## Pendientes de validación de Pablo

| Decisión/dato | Estado | Condición para resolver |
|---|---|---|
| Acceso público sin sesión a Jujuy Conecta | Requiere comprobación manual | Pablo confirmó `https://diario-jujuyconecta-six.vercel.app/`, asociada a develop y temporal mientras se resuelve el dominio personalizado. La consulta automatizada terminó en el login de Vercel. No cambiar infraestructura. |
| Inventario final de proyectos destacados | Pendiente | Confirmar cuáles permanecen publicados y datos exactos por proyecto. |
| Tecnología y alcance por proyecto | Pendiente | Contrastar con evidencia o confirmación del usuario, incluida autoría/participación. |
| Revisión visual y contenido del CV PDF | Pendiente de revisión | Archivo provisto preservado por hash y copiado al build; resta abrirlo y cotejar contenido/render con los datos aprobados. |

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

## Principios para decisiones futuras

- Los datos profesionales no se deducen de inconsistencias entre archivos: se consultan y validan.
- Una URL que no pudo verificarse no se presenta como funcional. Los enlaces pendientes se mantienen explícitos.
- El asistente puede tener datos más detallados que la página; publicar esos datos en el portfolio requiere validación independiente.
- Diferencias de longitud entre ES y EN son aceptables si el sentido, los hechos y la jerarquía son equivalentes.
- Cualquier cambio del comportamiento del asistente requiere un alcance y aprobación separados.
