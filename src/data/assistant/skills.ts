export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      "Node.js",
      "APIs REST",
      "Autenticación y autorización",
    ],
  },
  {
    id: "database",
    name: "Bases de datos y servicios",
    skills: [
      "Supabase",
      "PostgreSQL",
      "SQL",
      "Modelado de datos relacionales",
      "Row Level Security (RLS)",
    ],
  },
  {
    id: "tooling",
    name: "Herramientas y despliegue",
    skills: ["Git", "GitHub", "GitHub Actions", "Vercel"],
  },
  {
    id: "design",
    name: "Diseño",
    skills: ["Figma"],
  },
  {
    id: "practices",
    name: "Prácticas",
    skills: [
      "Arquitectura de componentes",
      "Componentes reutilizables",
      "Integración de APIs",
      "Code review",
    ],
  },
];
