export type EducationStatus = "completed" | "in-progress";

export interface EducationEntry {
  id: string;
  program: string;
  institution: string;
  year?: string;
  status: EducationStatus;
}

export const education: EducationEntry[] = [
  {
    id: "soy-henry-full-stack-web-developer",
    program: "Full Stack Web Developer",
    institution: "Soy Henry",
    year: "2023",
    status: "completed",
  },
  {
    id: "nucba-ux-ui-design",
    program: "UX/UI Design",
    institution: "NUCBA",
    year: "2024",
    status: "completed",
  },
  {
    id: "unju-licenciatura-trabajo-social",
    program: "Licenciatura en Trabajo Social",
    institution: "Universidad Nacional de Jujuy",
    status: "in-progress",
  },
];
