# Instrucciones del repositorio

## Proyecto y arquitectura

Este repositorio contiene el portfolio profesional de Pablo Martinez, una SPA en React 18, TypeScript y Vite 5, con Tailwind CSS 3, React Router, i18next/react-i18next y una API serverless en `api/` desplegada con Vercel. La aplicación visible vive principalmente en `src/`; sus traducciones ES/EN están en `src/i18n/locales/`; los recursos públicos están en `public/`; las pruebas existentes están en `tests/`.

El catálogo visible de proyectos se mantiene en `src/components/Projects.tsx` y sus textos localizados en ambos JSON de `src/i18n/locales/`. El conocimiento del asistente se organiza en `api/_lib/assistant/`. Estos son actualmente almacenes separados: al cambiar datos profesionales, revisá ambos cuando corresponda y evitá introducir divergencias.

## Objetivo y posicionamiento

El portfolio debe conseguir oportunidades como Frontend Developer, React Developer o Full Stack Developer. La narrativa aprobada es **Full Stack Developer con enfoque en Frontend**. Mantener el diseño visual existente y la experiencia bilingüe ES/EN. Incorporar experiencia y formación de manera compacta, actualizar el CV PDF en español e incluir desarrollo asistido por IA como competencia complementaria cuando esté respaldada por información validada.

## Flujo de trabajo

- Crear ramas de feature desde `develop`.
- Abrir PR de feature hacia `develop`; `main` se reserva para releases mediante el flujo acordado del repositorio.
- No cambiar de rama ni integrar cambios salvo pedido explícito.
- Usar Conventional Commits: tipo en inglés y descripción breve en español, por ejemplo `docs: preparar guía de actualización del portfolio` o `feat: agregar sección compacta de formación`.
- Antes de un commit, revisar `git status`, `git diff --check`, `git diff` y el alcance de cada archivo; confirmar que no haya secretos, datos inventados ni cambios fuera de alcance. Ejecutar las validaciones pertinentes disponibles y resumir resultados. No crear commits sin instrucción explícita.

## Responsabilidades al trabajar con agentes

- **Orquestador:** divide el trabajo en tareas pequeñas, define dependencias y archivos, evita solapamientos y verifica los criterios de aceptación.
- **Contenido profesional:** actualiza perfil, experiencia, formación, proyectos, habilidades, CV, traducciones y alineación entre web y conocimiento del asistente. Toda afirmación debe tener validación del usuario o evidencia verificable.
- **Frontend:** integra cambios acotados de componentes y navegación, conservando el sistema visual, el comportamiento responsive y la accesibilidad existente.
- **QA:** revisa diffs, enlaces, recursos, cobertura ES/EN, PDF, regresiones y resultados de lint/build/pruebas disponibles. Informa problemas comprobados por separado de riesgos potenciales.

Las skills reutilizables describen procedimientos de dominio específicos; estas instrucciones gobiernan el repositorio en general. Consultá la skill pertinente cuando la tarea corresponda, sin copiar sus listas de verificación completas aquí.

## Límites y reglas de contenido

- No rediseñar el portfolio ni implementar el efecto de anteojos del Hero.
- No inventar URLs, métricas, fechas, empleadores, funciones, resultados, educación ni experiencia.
- El destino de producción de Vercel para Jujuy Conecta sigue pendiente de confirmación. No reemplazar el dominio vencido por una URL inferida.
- Validar con Pablo el inventario final de proyectos y las fechas/datos profesionales antes de editar contenido.
- Mantener claves y significado equivalentes en `es.json` y `en.json` cuando se modifique contenido localizado; conservar español como idioma inicial y fallback salvo decisión explícita.
- Actualizar el CV solo con contenido aprobado. El PDF objetivo es la versión en español.
- Desarrollo asistido por IA es una competencia complementaria, no una especialidad principal ni una afirmación de herramientas/resultados no confirmados.

## Protección del asistente

El asistente está en producción y el problema de respuestas vacías se resolvió en PR #3. No modificar prompts/instrucciones, modelo, proveedor/API, endpoint, contrato, rate limiting, interfaz ni comportamiento como parte de una actualización de contenido. Cuando corresponda, cambiar exclusivamente los datos de conocimiento bajo `api/_lib/assistant/` y revisar que mantengan coherencia con el contenido aprobado del portfolio. No ejecutar tareas de implementación del asistente sin alcance expreso.

## Seguridad y variables de entorno

- No mostrar, copiar, registrar ni incluir valores de secretos o variables de entorno en documentación, logs, commits o respuestas.
- `.env.example` puede documentar nombres de variables requeridas, nunca valores reales.
- No modificar configuración global del sistema, instalar dependencias, ni operar sobre stashes sin autorización expresa.

## Criterios generales de aceptación

- El cambio se limita a los archivos y objetivo autorizados.
- Cada afirmación profesional tiene respaldo confirmado; URLs no verificadas o pendientes están identificadas sin sustituirlas por enlaces supuestos.
- Contenido ES/EN está alineado y el PDF coincide con los datos aprobados.
- El asistente conserva su funcionamiento y solo cambian sus datos de conocimiento cuando ese alcance fue solicitado.
- Se revisaron enlaces, recursos, responsive, accesibilidad y regresiones pertinentes; lint, build y pruebas se ejecutaron cuando están disponibles y sus resultados se informan con precisión.
- Antes de finalizar, se inspeccionan `git status -sb` y el diff para confirmar el estado real del árbol.
