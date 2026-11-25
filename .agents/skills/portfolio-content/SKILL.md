---
name: portfolio-content
description: Actualiza el perfil profesional, experiencia, formación, proyectos, habilidades, CV y traducciones del portfolio; úsala para cambios de contenido o para revisar consistencia profesional entre la web, ES/EN y el conocimiento del asistente.
---

# Portfolio Content

## Alcance

Gestionar contenido profesional y su coherencia entre los canales del repositorio. Seguir las reglas generales de `AGENTS.md`; esta skill define el procedimiento de contenido, no el flujo Git ni las reglas globales del proyecto.

## Procedimiento

1. Localizar todas las fuentes relevantes antes de editar: `src/i18n/locales/es.json`, `src/i18n/locales/en.json`, componentes que mantienen texto o datos directamente, `public/Pablo-Martinez-CV.pdf` y módulos de conocimiento bajo `api/_lib/assistant/`.
2. Separar datos confirmados, datos pendientes y afirmaciones contradictorias. Solicitar confirmación antes de publicar fechas, funciones, formación, proyectos, tecnologías o logros ambiguos; no completar vacíos por inferencia.
3. Confirmar el inventario final de proyectos y enlaces. La URL Vercel de Jujuy Conecta requiere confirmación explícita. No inventar ni “adivinar” dominios.
4. Actualizar los textos equivalentes en ES y EN, sin perder claves ni alterar hechos entre idiomas. Mantener el posicionamiento aprobado: Full Stack Developer con enfoque en Frontend; Junior no forma parte del título principal.
5. Mantener desarrollo asistido por IA como habilidad complementaria y con formulación aprobada. No atribuir herramientas, experiencia o resultados no confirmados.
6. Si se actualiza conocimiento del asistente, modificar solamente sus módulos de datos necesarios (`profile.ts`, `experience.ts`, `education.ts`, `skills.ts`, `projects.ts`). No cambiar instrucciones, API, modelo, limitación de solicitudes, interfaz o comportamiento.
7. Actualizar el PDF español solo con contenido aprobado. Verificar que el archivo enlazado corresponde al documento revisado; si se requiere editar/renderizar PDF, aplicar además la skill de PDF disponible.

## Revisión

- Comparar ambas traducciones y revisar que todos los datos aparezcan en los lugares correctos.
- Buscar duplicaciones de contacto, perfil, skills y proyectos en frontend, documentación y conocimiento del asistente.
- Confirmar que ningún pendiente (fechas, catálogo o URL) haya sido convertido en un hecho.
- Entregar un resumen de fuentes modificadas, validaciones pendientes y datos aún sujetos a aprobación.
