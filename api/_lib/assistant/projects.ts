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
    name: "Balance - Gestión de Gastos Compartidos",
    type: "Aplicación web de gestión financiera compartida",
    description:
      "Aplicación web para gestionar gastos, servicios y balances entre integrantes de un hogar.",
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
      "Tailwind CSS",
      "PWA",
    ],
    links: {
      live: "https://balance-app-indol.vercel.app/",
      github: "https://github.com/pablitomartinez/balance-app/",
    },
  },
  {
    id: "colegio-antropologos",
    name: "Plataforma Institucional - Colegio de Antropólogos",
    type: "Plataforma institucional de autogestión profesional",
    description:
      "Plataforma para centralizar trámites, estados e información profesional del Colegio de Antropólogos de Jujuy.",
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
    // Las fuentes discrepan entre React y Next.js; se omite el framework hasta verificarlo.
    technologies: ["TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    links: {
      live: "https://www.colegioantropologiajujuy.com.ar/",
      github: "https://github.com/ethercode-tech/antropolog-a-digital",
    },
  },
  {
    id: "jujuy-conecta",
    name: "Jujuy Conecta Diario",
    type: "Diario digital con CMS propio",
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
      live: "https://diario.jujuyconecta.com/",
      github: "https://github.com/altiora-software/diario-jujuyconecta",
    },
  },
  {
    id: "tierra-arcilla",
    name: "Catálogo Digital Autogestionable - Tierra Arcilla",
    type: "Catálogo digital autogestionable",
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
  {
    id: "asesoramiento-tesis",
    name: "Asesoramiento Tesis - Plataforma Profesional",
    type: "Sitio web institucional",
    description:
      "Sitio institucional para un servicio profesional de asesoramiento académico.",
    problem:
      "El servicio no contaba con un canal digital confiable para captar clientes en el ámbito académico.",
    solution:
      "Presenta una arquitectura de información orientada a la conversión y a la captación de consultas.",
    technologies: ["React", "Tailwind CSS", "SEO"],
    links: {
      live: "https://www.asesoramientotesis.com/",
      github:
        "https://github.com/ethercode-tech/fernanda-herrera-asesoramiento-tesis",
    },
  },
];
