# Pablo Martinez — Full Stack Developer

Portfolio y CV online de Pablo Martinez.  
Desarrollo de productos digitales con foco en usabilidad, flujos reales y calidad técnica.

Este proyecto funciona como **presentación profesional**, **muestra de trabajo real** y **base evolutiva** para oportunidades laborales como Full Stack Developer con fortaleza en Frontend.

---

## 🚀 Sobre el proyecto

Este portfolio fue diseñado y desarrollado desde cero con una lógica clara:

- Mostrar **experiencia real**, no ejercicios
- Explicar **problemas → soluciones**
- Priorizar **claridad, performance y UX**
- Mantener una base técnica limpia y escalable

No es un template.  
No es un landing genérico.  
Es un producto pensado como carta de presentación profesional.

---

## 🧠 Enfoque

- Componentes reutilizables
- Animaciones sutiles activadas por scroll (no decorativas)
- Tipografía y jerarquía visual como eje
- Diseño orientado a lectura y comprensión, no a impacto vacío
- Código mantenible y fácil de extender

---

## 🛠️ Stack tecnológico

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
- **Intersection Observer** (animaciones por scroll)
- **CSS moderno y variables**

---

## Desarrollo local: frontend y API

`npm run dev` inicia únicamente Vite en el puerto 8080. No ejecuta las funciones de `api/`: un `POST /api/assistant` devuelve 404 en ese servidor aunque funcione en producción. `npm run preview` tampoco ejecuta la API.

Para probar frontend y funciones juntos, el procedimiento recomendado es **Vercel CLI**, con una versión compatible con handlers Web Standard (`export default { fetch }`). Con la CLI ya disponible y autorizada, desde la raíz:

```sh
vercel link
vercel dev --listen 3000
```

- Vincular al **proyecto existente** y al equipo correcto; no crear otro proyecto ni ejecutar un despliegue. Si ya está vinculado, omitir `vercel link`.
- Abrir `http://localhost:3000` (o la URL que informe Vercel), **no el puerto interno 8080 de Vite**. Vercel enruta `/api/assistant` y sirve el frontend bajo el mismo origen, sin modificar el endpoint ni añadir un proxy.
- Usar las variables autorizadas del entorno **Development**: `OPENAI_API_KEY`, `OPENAI_MODEL`, `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`. Nunca anteponer `VITE_` a secretos ni copiarlos a documentación, logs o Git. No descargar ni sobrescribir archivos de entorno sin aprobación.
- La vinculación puede crear `.vercel/` y ajustar `.gitignore`: revisar estos cambios y no versionar datos locales ni secretos. No se ejecutó la CLI ni se modificaron variables/configuración durante esta auditoría.
- Si la CLI no está disponible, su instalación o ejecución mediante `npx` requiere autorización previa; no es una nueva dependencia del portfolio ni se necesita una instalación global para el código de la aplicación.

Comprobación inicial sin invocar proveedores: `GET /api/assistant` debe devolver **405** y `POST` con JSON `{}` debe devolver **400**, ambos en formato JSON. Después, con credenciales de desarrollo aprobadas, probar una pregunta desde la interfaz; utiliza servicios externos y está sujeta al rate limiting existente.

Procedimiento propuesto, pendiente de ejecución con Vercel. Ver [auditoría del asistente](docs/assistant-ui-audit.md) y [documentación oficial de `vercel dev`](https://vercel.com/docs/cli/dev).

---

## 📂 Proyectos destacados

### 📰 Jujuy Conecta Diario
Diario digital desarrollado de punta a punta.

**Problema:**  
Los medios locales necesitaban una plataforma propia para publicar noticias y gestionar editores sin depender de redes sociales o CMS genéricos.

**Solución:**  
Diseño y desarrollo completo de un sistema con:
- Autenticación
- Roles (admin / editor)
- Editor de noticias
- UX iterada a partir de feedback real de periodistas en uso diario

**Tecnologías:**  
React · TypeScript · Tailwind · Supabase · Auth · Roles · Diseño de base de datos

---

### 🏛 Plataforma Institucional — Colegio de Antropólogos de Jujuy

**Problema:**  
Gestión manual de matrículas, consultas y validaciones profesionales con alta fricción administrativa.

**Solución:**  
Plataforma web institucional que:
- Centraliza información profesional
- Permite trámites online
- Ofrece consultas públicas para empresas y organismos

**Tecnologías:**  
React · TypeScript · Tailwind · Supabase · Autenticación · UX orientada a procesos reales

---

## 🎯 Objetivo profesional

Busco oportunidades profesionales como **Full Stack Developer**, con una fortaleza clara en Frontend.

Aporto:
- Experiencia construyendo productos reales
- Mirada de usuario y de proceso
- Capacidad de diseñar, desarrollar y mejorar sistemas completos
- Comunicación clara y enfoque práctico

---

## 🌍 Ubicación

Argentina — Disponible para trabajo remoto.

---

## 📬 Contacto

- Portfolio: https://cv-26-pm.vercel.app/
- LinkedIn: https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/
- Email: pablo.emartinez.dev@gmail.com

---

## 📌 Nota final

Este proyecto está en evolución constante.  
No busca ser perfecto, sino **honesto, funcional y profesional**.

Si llegaste hasta acá revisando el código:  
gracias por tomarte el tiempo.
