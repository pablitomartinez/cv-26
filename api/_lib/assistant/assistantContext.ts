import { education, type EducationEntry } from "./education.js";
import { experience, type ProfessionalExperience } from "./experience.js";
import { profile, type AssistantProfile } from "./profile.js";
import { projects, type AssistantProject } from "./projects.js";
import { skills, type SkillCategory } from "./skills.js";

export interface AssistantKnowledge {
  profile: AssistantProfile;
  experience: ProfessionalExperience[];
  skills: SkillCategory[];
  projects: AssistantProject[];
  education: EducationEntry[];
}

export const assistantKnowledge: AssistantKnowledge = {
  profile,
  experience,
  skills,
  projects,
  education,
};

export const serializeAssistantKnowledge = (): string =>
  JSON.stringify(assistantKnowledge, null, 2);

const formatList = (items: string[]): string =>
  items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- No disponible";

const formatOptionalList = (label: string, items?: string[]): string =>
  items && items.length > 0 ? `${label}:\n${formatList(items)}` : "";

const formatSection = (title: string, content: string): string =>
  `${title}\n${content.trim()}`;

export const buildAssistantContext = (
  knowledge: AssistantKnowledge = assistantKnowledge,
): string => {
  const profileContext = [
    `Nombre completo: ${knowledge.profile.fullName}`,
    `Nombre profesional: ${knowledge.profile.professionalName}`,
    `Rol: ${knowledge.profile.role}`,
    `Roles alternativos: ${knowledge.profile.alternativeRoles.join(", ")}`,
    `Resumen: ${knowledge.profile.summary}`,
    `Ubicacion: ${knowledge.profile.location}`,
    `Disponibilidad: ${knowledge.profile.availability.join(", ")}`,
    `Objetivos profesionales: ${knowledge.profile.careerGoals.join(" ")}`,
    `Idiomas: ${knowledge.profile.languages
      .map((language) => `${language.name} (${language.level})`)
      .join(", ")}`,
    `Portfolio: ${knowledge.profile.portfolio}`,
    `GitHub: ${knowledge.profile.github}`,
    `LinkedIn: ${knowledge.profile.linkedin}`,
    `Email: ${knowledge.profile.email}`,
  ].join("\n");

  const experienceContext = knowledge.experience
    .map((entry) =>
      [
        `${entry.role} - ${entry.organization}`,
        `Periodo: ${entry.startDate} - ${entry.endDate ?? "actualidad"}`,
        `Descripcion: ${entry.description}`,
        `Responsabilidades:\n${formatList(entry.responsibilities)}`,
        `Tecnologias: ${entry.technologies.join(", ")}`,
      ].join("\n"),
    )
    .join("\n\n");

  const skillsContext = knowledge.skills
    .map((category) => `${category.name}: ${category.skills.join(", ")}`)
    .join("\n");

  const projectsContext = knowledge.projects
    .map((project) =>
      [
        `${project.name} (${project.type})`,
        project.status ? `Estado: ${project.status}` : "",
        `Descripcion: ${project.description}`,
        project.problem ? `Problema: ${project.problem}` : "",
        project.solution ? `Solucion: ${project.solution}` : "",
        formatOptionalList("Responsabilidades", project.responsibilities),
        formatOptionalList("Funcionalidades", project.features),
        `Tecnologias: ${project.technologies.join(", ")}`,
        project.links.live ? `Link: ${project.links.live}` : "",
        project.links.github ? `Repositorio: ${project.links.github}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n\n");

  const educationContext = knowledge.education
    .map((entry) =>
      [
        `${entry.program} - ${entry.institution}`,
        entry.year ? `Anio: ${entry.year}` : "",
        `Estado: ${entry.status === "completed" ? "Completado" : "En curso"}`,
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n\n");

  return [
    formatSection("PERFIL", profileContext),
    formatSection("EXPERIENCIA", experienceContext),
    formatSection("SKILLS", skillsContext),
    formatSection("PROYECTOS", projectsContext),
    formatSection("EDUCACION", educationContext),
  ].join("\n\n");
};
