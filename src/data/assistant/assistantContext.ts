import { education, type EducationEntry } from "./education";
import { experience, type ProfessionalExperience } from "./experience";
import { profile, type AssistantProfile } from "./profile";
import { projects, type AssistantProject } from "./projects";
import { skills, type SkillCategory } from "./skills";

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
