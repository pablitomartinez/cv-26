# Plan de actualización del portfolio

## Propósito y alcance

Preparar una actualización profesional del portfolio para oportunidades como Frontend Developer, React Developer o Full Stack Developer. El posicionamiento aprobado es **Full Stack Developer con enfoque en Frontend**. Se conserva el diseño existente y el soporte ES/EN; se incorporan experiencia y formación de manera compacta, se actualiza el CV en español y se suma desarrollo asistido por IA como competencia complementaria.

Esta etapa organiza el trabajo. No autoriza cambiar el comportamiento del asistente, rediseñar el portfolio ni inferir datos profesionales o URLs.

## Dependencias y decisiones previas

Antes de editar contenido deben estar resueltos:

1. Inventario final de proyectos que se mostrarán y datos de cada proyecto (descripción, stack, recursos, repositorio y estado).
2. Fechas, cargos, organizaciones, responsabilidades y formación profesional que Pablo valide.
3. URL de producción Vercel para Jujuy Conecta; el dominio `diario.jujuyconecta.com` venció y no debe sustituirse por una conjetura.
4. Redacción aprobada para desarrollo asistido por IA y confirmación de datos del CV en español.

El resto de tareas puede avanzar en preparación o inspección, pero no publicar información pendiente.

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
