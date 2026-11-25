export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface AssistantProject {
  id: string;
  name: string;
  type: string;
  status?: string;
  description: string;
  problem?: string;
  solution?: string;
  responsibilities?: string[];
  features?: string[];
  technologies: string[];
  links: ProjectLinks;
}

export const projects: AssistantProject[] = [
  {
    id: "balance",
    name: "Balance App",
    type: "Aplicación web de gestión financiera compartida",
    status: "Proyecto destacado publicado en el portfolio.",
    description:
      "Aplicación Full Stack para gestionar las finanzas compartidas de un hogar, con autenticación, PostgreSQL, operaciones de negocio mediante SQL/RPC y políticas de Row Level Security (RLS).",
    problem:
      "La administración de gastos compartidos puede generar registros dispersos, transferencias difíciles de seguir y dudas sobre pagos, importes y gastos pendientes.",
    solution:
      "Centraliza la economía compartida de un hogar mediante autenticación, hogares, registro y distribución de gastos, aprobaciones y seguimiento de movimientos.",
    responsibilities: [
      "Diseñar el backend con Supabase y PostgreSQL.",
      "Implementar autenticación, modelo relacional y operaciones de negocio mediante SQL y RPC.",
      "Implementar Row Level Security y reglas de autorización según la membresía del hogar.",
    ],
    features: [
      "Creación e invitación a hogares",
      "Registro y distribución de gastos",
      "Aprobaciones",
      "Seguimiento de movimientos",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "SQL",
      "RPC",
      "RLS",
      "Tailwind CSS",
      "PWA",
    ],
    links: {
      live: "https://balance-app-indol.vercel.app/",
      github: "https://github.com/pablitomartinez/balance-app/",
    },
  },
  {
    id: "asesoramiento-tesis",
    name: "Fernanda Herrera",
    type: "Sitio web profesional de asesoramiento académico",
    status: "Proyecto destacado publicado en el portfolio. Repositorio de referencia ethercode-tech/fernanda-herrera-asesoramiento-tesis no accesible públicamente (404 sin autenticación).",
    description:
      "Sitio profesional de Fernanda Herrera con interfaces responsivas y enfoque en UX/UI, rendimiento, accesibilidad, SEO e integración con Supabase.",
    problem:
      "El servicio necesitaba un canal digital confiable para presentar su propuesta y recibir consultas en el ámbito académico.",
    solution:
      "Organiza la información del servicio para facilitar la navegación y las consultas, con interfaces responsivas e integración con Supabase.",
    technologies: ["React", "Tailwind CSS", "Supabase", "SEO"],
    links: {
      live: "https://www.asesoramientotesis.com/",
    },
  },
  {
    id: "colegio-antropologos",
    name: "Colegio de Antropólogos",
    type: "Plataforma institucional de autogestión profesional",
    status: "Proyecto destacado publicado en el portfolio.",
    description:
      "Plataforma para digitalizar la matriculación y la gestión administrativa del Colegio de Antropólogos de Jujuy, centralizando trámites, estados e información profesional.",
    problem:
      "Los trámites se gestionaban manualmente y las consultas externas por profesionales se respondían por correo, provocando demoras administrativas.",
    solution:
      "Ofrece autenticación, un panel administrativo, gestión dinámica de datos y una consulta pública de profesionales.",
    responsibilities: [
      "Desarrollar la plataforma de matriculación digital.",
      "Implementar autenticación, panel administrativo y gestión dinámica de datos.",
      "Integrar Supabase y APIs REST para consultar y actualizar información.",
    ],
    features: [
      "Autenticación",
      "Panel administrativo",
      "Gestión de trámites y estados",
      "Consulta pública de profesionales",
    ],
    // React y Tailwind confirmados en el package.json público del repositorio.
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    links: {
      live: "https://www.colegioantropologiajujuy.com.ar/",
      github: "https://github.com/ethercode-tech/antropolog-a-digital",
    },
  },
  {
    id: "jujuy-conecta",
    name: "Jujuy Conecta Diario",
    type: "Diario digital con CMS propio",
    status: "Proyecto destacado publicado en el portfolio. Continúa publicando noticias actuales mediante automatización, según confirmación de Pablo. URL pública temporal de Vercel asociada a develop mientras se resuelve el dominio personalizado.",
    description:
      "Diario digital con un sistema propio para publicar y gestionar contenido.",
    problem:
      "El proyecto necesitaba una infraestructura ágil e independiente para administrar un flujo diario de noticias sin depender de CMS genéricos.",
    solution:
      "Implementa un CMS propio, un panel administrativo, SEO técnico y un flujo automatizado de scraping, procesamiento y publicación de noticias.",
    responsibilities: [
      "Desarrollar el CMS para publicación y gestión dinámica de contenido.",
      "Implementar SEO técnico mediante metadata dinámica y Open Graph.",
      "Automatizar el scraping, procesamiento y publicación con Python y GitHub Actions.",
    ],
    features: [
      "Publicación manual desde un panel para editores",
      "Scraping y publicación automatizada de noticias",
      "Autenticación, roles y gestión centralizada de contenido",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Python",
      "GitHub Actions",
    ],
    links: {
      live: "https://diario-jujuyconecta-six.vercel.app/",
      github: "https://github.com/altiora-software/diario-jujuyconecta",
    },
  },
  {
    id: "papeleta",
    name: "Papeleta — Plataforma de invitaciones digitales",
    type: "Producto digital de desarrollo colaborativo",
    status:
      "Quinto proyecto destacado incorporado al portfolio. Repositorio privado, sin enlace público al código. Stack verificado mediante auditoría del repositorio según la información aprobada por Pablo. La integración de Mercado Pago existe en el código, pero no se ha verificado una compra completa en producción ni se atribuye su implementación individual a Pablo. El historial Git no permite identificar commits individuales de Pablo; sus contribuciones fueron confirmadas directamente por él, no mediante atribución de commits.",
    description:
      "Plataforma Full Stack de invitaciones digitales desarrollada colaborativamente. Pablo contribuyó en diseño y UX/UI, Frontend, landing page, planificación del producto, autenticación y permisos, definición de funcionalidades, despliegue y mantenimiento; no se presenta como autor exclusivo.",
    problem:
      "Centralizar la creación, personalización y gestión de invitaciones digitales, simplificando la organización de eventos y la comunicación con los invitados.",
    solution:
      "Plataforma Full Stack con editor de invitaciones, previsualización de diseños, gestión de invitados, confirmaciones de asistencia y paneles de administración.",
    responsibilities: [
      "Contribuir al diseño y UX/UI dentro del equipo.",
      "Desarrollar el Frontend y la landing page como parte del trabajo colaborativo.",
      "Participar en la planificación del producto y definición de funcionalidades.",
      "Contribuir en autenticación y permisos.",
      "Participar en el despliegue y mantenimiento.",
    ],
    features: [
      "Editor de invitaciones",
      "Previsualización de diseños",
      "Gestión de invitados",
      "Confirmaciones de asistencia",
      "Paneles de administración",
    ],
    technologies: [
      "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Mercado Pago", "CSS Modules",
    ],
    links: {
      live: "https://papeleta.com.ar/",
    },
  },
  {
    id: "tierra-arcilla",
    name: "Catálogo Digital Autogestionable - Tierra Arcilla",
    type: "Catálogo digital autogestionable",
    status: "Proyecto anterior, retirado del catálogo de destacados. No forma parte de los proyectos publicados en la galería actual.",
    description:
      "Aplicación web para administrar y compartir el inventario de un emprendimiento local.",
    problem:
      "El emprendimiento necesitaba digitalizar y compartir su inventario por WhatsApp sin recurrir a plataformas costosas o complejas de mantener.",
    solution:
      "Proporciona un panel de administración, carga masiva de productos mediante CSV, base de datos en tiempo real y metadata dinámica para compartir productos.",
    features: [
      "Panel de administración",
      "Carga masiva de productos mediante CSV",
      "Base de datos en tiempo real",
      "Metadata dinámica para vistas previas en WhatsApp",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
    ],
    links: {
      live: "https://tierra-arcilla.vercel.app/",
      github: "https://github.com/pablitomartinez/tierra-arcilla-catalog",
    },
  },
];
