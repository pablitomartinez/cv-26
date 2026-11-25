---
name: portfolio-frontend
description: Implementa cambios acotados de interfaz en el portfolio, incluyendo componentes, navegación, responsive y accesibilidad, manteniendo el sistema visual existente y sin alterar el comportamiento del asistente.
---

# Portfolio Frontend

## Alcance

Integrar contenido o mejoras de interfaz ya aprobados en React. Las decisiones sobre hechos profesionales corresponden al usuario y al flujo de contenido; las reglas generales del repositorio están en `AGENTS.md`.

## Procedimiento

1. Inspeccionar los componentes, tokens y patrones existentes antes de editar. Reutilizar utilidades y piezas de `src/components/ui-system/` cuando correspondan.
2. Mantener la identidad visual actual. No rediseñar secciones, introducir un sistema visual paralelo ni implementar el efecto de anteojos.
3. Para nuevas secciones compactas, respetar jerarquía, navegación y ritmo visual actuales; actualizar enlaces de navegación en todas las variantes de pantalla si el cambio lo requiere.
4. Comprobar comportamiento en móvil y escritorio, orden semántico, foco visible, nombres accesibles de controles, etiquetas de formularios, texto alternativo y respeto a movimiento reducido cuando haya animación.
5. Mantener separados los datos de contenido de la lógica visual cuando la estructura existente lo permita; no duplicar arrays o textos entre renderizados por idioma.
6. No editar `src/components/PortfolioAssistant.tsx`, `src/lib/assistantApi.ts` ni `api/assistant.ts` como parte de cambios de contenido o frontend del portfolio. No alterar comportamiento del asistente.

## Revisión

- Revisar el diff para detectar cambios de estilo fuera del alcance.
- Comprobar estados responsive, navegación por teclado y accesibilidad básica de los elementos tocados.
- Informar riesgos que requieran prueba visual o ejecución en navegador; no presentar como verificados los estados que no se inspeccionaron.
