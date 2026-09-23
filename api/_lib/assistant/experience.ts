export interface ProfessionalExperience {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experience: ProfessionalExperience[] = [
  {
    id: "full-stack-developer-freelance",
    role: "Full Stack Developer Freelance",
    organization: "Freelance",
    startDate: "2022",
    endDate: null,
    current: true,
    description:
      "Desarrollo de aplicaciones web para clientes y organizaciones.",
    responsibilities: [
      "Desarrollar aplicaciones web utilizando React, Next.js y TypeScript.",
      "Implementar autenticación, paneles administrativos, integraciones con APIs REST y gestión de datos.",
      "Desarrollar interfaces responsivas y componentes reutilizables con foco en experiencia de usuario y mantenibilidad.",
      "Participar en el análisis de requerimientos, la planificación, la implementación y la evolución de funcionalidades.",
    ],
    technologies: ["React", "Next.js", "TypeScript"],
  },
];
