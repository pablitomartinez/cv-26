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
    role: "Full Stack Developer",
    organization: "Ethercode (Freelance)",
    startDate: "2022",
    endDate: null,
    current: true,
    description:
      "Desarrollo y mantenimiento de aplicaciones web para clientes y organizaciones, desde el relevamiento de requerimientos hasta el despliegue.",
    responsibilities: [
      "Desarrollo y mantenimiento de aplicaciones web para clientes y organizaciones, desde el relevamiento de requerimientos hasta el despliegue.",
      "Implementación de autenticación, paneles administrativos e integración de APIs REST para digitalizar procesos de gestión.",
    ],
    technologies: ["React", "Next.js", "TypeScript"],
  },
];
