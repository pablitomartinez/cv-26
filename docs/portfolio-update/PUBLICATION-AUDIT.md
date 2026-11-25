# Auditoría definitiva de publicación

Fecha: **25 de noviembre de 2026**. Rama: `feature/actualizacion-portfolio-profesional`.

## Veredicto: NO APTO PARA PUBLICAR

**Cierre revisado el 25 de noviembre de 2026:** el nuevo CV resuelve los dos defectos y el portfolio/PDF usan los perfiles confirmados por Pablo. Build y pruebas vuelven a pasar; las capturas de Balance y Papeleta contienen datos de demostración, según confirmación del usuario. **Solo sigue abierto el hallazgo de consistencia entre canales:** el perfil público de GitHub (README y enlace social) todavía enlaza al slug anterior de LinkedIn. No se declara cerrado ni se modifica ese canal externo sin autorización. El portfolio/CV no requieren cambios adicionales de contenido para los controles solicitados.

## Hallazgos comprobados y condiciones de cierre

### Resuelto — PDF con enlace inválido y stack contradictorio

Archivo: `public/Pablo-Martinez-CV.pdf`, página 1.

- Pablo confirma que reemplazó el PDF por la versión corregida de Google Docs. La extracción actual devuelve una página en español, con perfil, experiencia, cuatro proyectos, habilidades, formación e idiomas; no se regeneró ni editó el archivo en este cierre.
- La anotación URI de «Diario Digital — CMS» ahora es `https://diario-jujuyconecta-six.vercel.app/`, idéntica a web y asistente. El dominio vencido ya no aparece entre sus siete URI.
- El stack de «Sistema para Colegio de Antropólogos» ahora es **React, Vite, TypeScript, Tailwind CSS, Supabase y PostgreSQL**, sin Next.js en ese proyecto. El manifiesto público del Colegio confirma React, Vite, TypeScript, Tailwind CSS y Supabase; PostgreSQL coincide con el stack aprobado y los datos del portfolio/asistente. Las fichas web/asistente omiten Vite, sin atribuir otro framework: son un subconjunto compatible, no una contradicción.
- El CV conserva cuatro proyectos: no incluir Papeleta no se considera un defecto, porque su incorporación al PDF no fue solicitada y las tareas anteriores exigieron preservarlo.

**Cerrado:** contenido corregido y siete anotaciones URI verificadas directamente en el archivo; copia de producción idéntica al nuevo PDF. La ausencia de Papeleta se mantiene fuera del alcance.

### Pendiente externo — LinkedIn no unificado con el canal público de GitHub

| Canal | URL observada |
|---|---|
| `src/components/Contact.tsx:132`, `src/components/Footer.tsx:37`, README, `api/_lib/assistant/profile.ts:45` y PDF | `https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/` |
| README público y enlace social del perfil GitHub de Pablo, consultados nuevamente en este cierre | `https://www.linkedin.com/in/pablo-martinez-9b2991233/` |

Pablo confirma como canónicos **`https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/`** y **`https://github.com/pablitomartinez`**, y confirma que corrigió la visibilidad pública de LinkedIn. Contact, Footer, README local, conocimiento del asistente y las URI del nuevo PDF coinciden con esas direcciones. El perfil GitHub responde correctamente y su README usa el GitHub confirmado.

Fuentes externas consultadas nuevamente: `https://raw.githubusercontent.com/pablitomartinez/pablitomartinez/main/README.md` y `https://github.com/pablitomartinez`. Ambas todavía muestran el LinkedIn anterior. La consulta automatizada al LinkedIn confirmado responde **HTTP 999**: no permite comprobar su visibilidad, pero tampoco refuta la confirmación del usuario.

**Para cerrar completamente:** alinear el enlace social y los dos enlaces LinkedIn del README público de GitHub con la URL canónica y volver a comprobarlos. La identidad canónica y la visibilidad quedan confirmadas por Pablo; la consistencia externa sigue pendiente por evidencia actual, no por falta de confirmación. No se opera sobre ese perfil/repositorio remoto.

## Privacidad

### Resuelto — captura administrativa de Papeleta

- Se comprobó ausencia de referencias activas en la galería/código antes de retirar `public/projects/papeleta/1.png` con autorización expresa del usuario.
- Build regenerado: recurso ausente tanto en `public/` como en `dist/`.
- `git ls-files -- public/projects/papeleta/1.png` y `git log --all --format=oneline -- public/projects/papeleta/1.png`: sin resultados. El archivo no estaba versionado ni agregado al índice; su retiro no aparece como una eliminación de archivo tracked en el diff.
- No se hizo staging, commit ni push. El recurso no forma parte del conjunto de archivos nuevos pendientes de incorporar. No se puede afirmar nada sobre copias externas, despliegues anteriores o historiales remotos no disponibles localmente.

### Confirmaciones de privacidad y límites

- Se inspeccionaron visualmente las **17 capturas restantes**, incluyendo Tierra Arcilla aunque no esté en la galería. No se observaron contraseñas legibles, tokens, correos de invitados ni listados privados equivalentes al recurso retirado.
- **Cerrado por confirmación expresa de Pablo:** las capturas de Balance y Papeleta contienen datos de demostración, incluidos los nombres/importes y los datos de invitaciones/eventos observados. No se presenta esa confirmación como una comprobación automatizada de su origen. No se alteraron recursos.
- Las fotos/nombres institucionales del Colegio corresponden a una sección de autoridades; no se infiere acceso a datos administrativos individuales.
- Los contactos profesionales del propio Pablo en web/PDF son contenido público aprobado, no se clasifican automáticamente como secretos.
- Las 20 imágenes/iconos públicos se abrieron con Pillow; sin etiquetas EXIF GPS/autor/ubicación/comentario consideradas sensibles en el control. No se localizaron nombres de archivos `.env`, claves privadas o bases de datos en `public/` o `dist/`. Estos controles no equivalen a un análisis forense exhaustivo de todos los bytes o a confirmar consentimiento de terceros.

## Enlaces externos y PDF

Consultas GET sin autenticación; un HTTP 200 no prueba formularios, sesiones ni pagos.

| Destino | Resultado |
|---|---|
| Balance público y repositorio | 200 / 200 |
| Fernanda Herrera con y sin `www` | 200; sin `www` redirige a la misma web |
| Colegio público y repositorio | 200 / 200 |
| Jujuy Conecta temporal | Termina en login de Vercel (200 de login, no del diario); se conserva URL exacta aprobada, sin sustituirla. El acceso anónimo actual requiere reconfirmación manual; no se revoca la aprobación previa de Pablo ni se cambia infraestructura. |
| Repositorio de Jujuy Conecta | 200 |
| Papeleta pública | 200; sin botón de repositorio privado |
| GitHub de Pablo y portfolio | 200 / 200 |
| Diario enlazado desde el nuevo PDF | URI corregida a la URL temporal aprobada; la consulta actual también termina en login de Vercel, no en contenido del diario. Se mantiene la aprobación previa de acceso desde incógnito; no se certifica acceso anónimo actual. |
| LinkedIn confirmado por Pablo | 999 en la nueva consulta automatizada; visibilidad pública corregida según confirmación del usuario. |

PDF español legible mediante extracción de una página, con siete anotaciones URI: LinkedIn, GitHub, portfolio, Fernanda, Balance, Colegio y Diario. Header enlaza `/Pablo-Martinez-CV.pdf` con `download`. Las URI se inspeccionaron directamente en los bytes del PDF, no solo en el texto visible. No se ejecutó un visor interactivo del PDF; no se atribuye a esta revisión una certificación visual tipográfica.

SHA-256 del nuevo PDF, idéntico entre `public/` y `dist/`: `49d162b6f045cabd555e976172e80177bf8d5ff9d124bd0dedfdc388d4a21c61`. Difiere de HEAD porque Pablo reemplazó el archivo; el hash anterior era `806674f36529b70c7e863aa9c72b0024b059b234d915dd7be1398f24e485f64a`.

Las siete URI actuales son:

1. `https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/`
2. `https://github.com/pablitomartinez`
3. `https://cv-26-pm.vercel.app/`
4. `https://asesoramientotesis.com/`
5. `https://balance-app-indol.vercel.app/`
6. `https://www.colegioantropologiajujuy.com.ar/`
7. `https://diario-jujuyconecta-six.vercel.app/`

## Contenido y conocimiento del asistente

- Cinco destacados y orden aprobado: Balance App, Fernanda Herrera, Colegio de Antropólogos, Jujuy Conecta y Papeleta. Tierra Arcilla permanece anterior/no destacada en el conocimiento; no se añadieron proyectos.
- Comprobación automatizada del array real de Projects frente a `api/_lib/assistant/projects.ts`: stacks y enlaces públicos/código equivalentes para los cinco proyectos; Papeleta sin Tailwind ni repositorio público. Trece imágenes existentes con títulos/alt no vacíos, tanto en fuente como en build.
- Perfil Full Stack con enfoque en Frontend, experiencia Ethercode desde 2022 y las tres formaciones coinciden con el conocimiento del asistente. En ES/EN se preserva el significado; las fichas públicas son deliberadamente más breves que el conocimiento.
- Papeleta usa el texto editorial aprobado y tres contribuciones. Las precisiones de auditoría de pagos y commits se conservan en documentación/conocimiento previo; no se cambian prompts ni comportamiento conversacional en esta auditoría. No se probó si un modelo externo podría mencionarlas en una respuesta.
- Paridad recursiva: **139 claves ES/EN**; desafío máximo 30 palabras, solución máximo 40 y hasta tres destacados en cada proyecto/idioma. Español inicial/fallback sin modificar.
- Único archivo de API modificado en el diff acumulado: datos de proyectos del asistente. Endpoint, instrucciones, modelo, proveedor, contrato, rate limiting e interfaz no tienen cambios frente a HEAD.

## Validaciones técnicas

En este cierre se repitieron exclusivamente build, pruebas del asistente, diff y los controles documentales/recursos solicitados. Lint y matriz de navegador corresponden a la auditoría anterior, no se ejecutaron nuevamente.

| Control | Resultado |
|---|---|
| `npm run build` | **Reejecutado: exitoso**. JS 741.60 KB / 248.92 KB gzip. Avisos existentes de Browserslist y chunk >500 KB. No se instalan dependencias ni se corrige esa deuda. |
| `node --test tests/*.test.mjs` | **Reejecutado: 7/7**, 0 fallos; mensajes de proveedor esperados en escenarios negativos simulados. |
| `npm run lint` | Referencia anterior: **16 errores y 8 advertencias**, sin regresiones en aquella auditoría. No reejecutado en este cierre de alcance exclusivo. |
| `git diff --check` | Sin errores; avisos LF/CRLF propios de la configuración existente. |
| Ausencia de captura privada | Reconfirmada: `1.png` ausente de `public/`, build regenerado, índice e historial Git alcanzable de la ruta; sin referencias activas en `src/` ni `api/`. |

**Registro de la auditoría anterior, no repetido en este cierre:** build de producción probado con `vite preview` y Edge headless, sin instalar herramientas. Matriz: **390×844, 768×900, 1280×720 y 1440×900 × ES/EN × claro/oscuro**, 16 combinaciones y los cinco proyectos en cada una.

Se verificó selección, títulos, límites de destacados, imágenes decodificadas, `object-contain`, ausencia de desborde horizontal de Projects, detalle móvil expandible y único enlace público de Papeleta. En escritorio, alineando Projects bajo la navbar, el extremo inferior de la ficha quedó como máximo en **700 px**, visible a 1280×720 y 1440×900. Sin alturas fijas ni nuevas modificaciones visuales.

En las 16 combinaciones se comprobó abrir/cerrar el chatbot por botón, panel dentro del ancho disponible, botón de cierre alcanzable sin interferencia de la navbar, foco inicial, reapertura por Enter, cierre por Escape y restitución del foco. No se enviaron preguntas ni se invocaron proveedores reales. Las pruebas backend usan simulaciones; no se certifica una conversación de extremo a extremo en producción. Analítica bloqueada en el navegador de QA; fuentes externas permitidas, sin certificar su disponibilidad en todos los dispositivos.

Scripts y capturas de comprobación fuera del repositorio, en el directorio temporal autorizado. Lector de pantalla, dispositivos físicos y funcionalidades privadas de los proyectos no se probaron. Una ejecución inicial de la matriz en sesión continua encontró un timeout de sincronización del script; las combinaciones restantes se repitieron en sesiones aisladas y pasaron. No se modificó la aplicación para resolver el arnés de prueba.

## Alcance y entrega

La auditoría anterior retiró el recurso privado autorizado y actualizó README/documentación del sprint. **Este cierre modifica exclusivamente `PUBLICATION-AUDIT.md` y `CHECKLIST.md`** para registrar las confirmaciones y verificaciones solicitadas. El PDF ya había sido reemplazado por Pablo antes del cierre. Se preservan todos los cambios previos, sin tocar contenido, diseño, funcionalidades, imágenes, asistente ni dependencias. Los estados anteriores de otros documentos son registro previo y no se actualizan por quedar fuera del alcance autorizado.

Sin cambio de rama, staging, commits, pushes, instalaciones ni operaciones sobre stashes. El árbol no queda limpio porque conserva la implementación anterior pendiente de incorporar. `git diff --stat` solo informa archivos tracked; los nuevos se enumeran aparte mediante `git ls-files --others --exclude-standard`.

Archivos nuevos previstos para revisión/incorporación: este informe, `PAPELETA.md`, `STAGE-3.md` y las tres capturas `2.jpeg`, `3.png`, `4.png` de Papeleta. La captura retirada no debe agregarse.
