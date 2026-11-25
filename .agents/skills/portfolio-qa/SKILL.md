---
name: portfolio-qa
description: Audita diffs del portfolio para detectar regresiones, desalineación ES/EN, enlaces o recursos inválidos, problemas de CV/PDF, accesibilidad básica y fallos de lint, build o pruebas.
---

# Portfolio QA

## Alcance

Revisar cambios antes de integrarlos. Seguir las instrucciones generales de `AGENTS.md`; esta skill establece controles de calidad concretos.

## Procedimiento

1. Inspeccionar `git status -sb`, diff completo y `git diff --check`; verificar que los archivos modificados se limiten a la tarea.
2. Para texto localizado, comparar recursivamente las claves de `src/i18n/locales/es.json` y `en.json`, y revisar equivalencia semántica de los campos tocados.
3. Verificar URLs contra destinos aprobados; comprobar que recursos referenciados existan en `public/`. No inferir URL Vercel de Jujuy Conecta, cuyo destino requiere confirmación.
4. Si se cambió el CV, confirmar nombre/ruta enlazada, idioma español, apertura/render del PDF y coherencia con el contenido profesional aprobado.
5. Revisar accesibilidad básica de los cambios (semántica, etiquetas, alt, foco, nombres de iconos/controles), y responsive en los breakpoints pertinentes.
6. Revisar que los cambios de conocimiento del asistente se limiten a datos y que no alcancen prompts, endpoint, modelo, API, rate limiting, interfaz o comportamiento.
7. Consultar scripts disponibles en `package.json`. Ejecutar lint, build y pruebas existentes cuando el runtime y dependencias estén disponibles y la tarea autorice verificación. No instalar dependencias ni agregar scripts sin autorización. Informar explícitamente cualquier control no ejecutado.

## Informe de QA

Ordenar hallazgos por gravedad, incluir archivo y línea cuando sea posible, diferenciar defecto comprobado de riesgo potencial y registrar comandos/controles ejecutados con sus resultados. Cerrar con estado de árbol y diff; no crear commits.
