export interface ProfileLanguage {
  name: string;
  level: string;
}

export interface AssistantProfile {
  fullName: string;
  professionalName: string;
  role: string;
  alternativeRoles: string[];
  summary: string;
  location: string;
  availability: string[];
  careerGoals: string[];
  languages: ProfileLanguage[];
  portfolio: string;
  github: string;
  linkedin: string;
  email: string;
}

export const profile: AssistantProfile = {
  fullName: "Pablo Ezequiel Martínez",
  professionalName: "Pablo Martínez",
  role: "Full Stack Developer con enfoque en Frontend",
  alternativeRoles: ["Frontend Developer", "React Developer", "Full Stack Developer"],
  summary:
    "Full Stack Developer con enfoque en Frontend y experiencia en aplicaciones web para clientes y organizaciones. Desarrolla interfaces responsivas y soluciones con React, Next.js, TypeScript, APIs REST, Supabase y PostgreSQL.",
  location: "San Salvador de Jujuy, Jujuy, Argentina",
  availability: [
    "Trabajo remoto",
    "Modalidad híbrida o presencial en Jujuy",
  ],
  careerGoals: [
    "Integrarse a un equipo de producto y aportar al desarrollo completo de aplicaciones web.",
    "Continuar profundizando sus habilidades Full Stack.",
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Básico/técnico" },
  ],
  portfolio: "https://cv-26-pm.vercel.app/",
  github: "https://github.com/pablitomartinez",
  linkedin:
    "https://www.linkedin.com/in/pablo-ezequiel-martinez-9b2991233/",
  email: "pablo.emartinez.dev@gmail.com",
};
