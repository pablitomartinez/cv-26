interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Core",
    // Basado en tus habilidades técnicas principales [cite: 6]
    skills: ["React", "Next.js (App Router)", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & DB",
    // Integrando tu experiencia con Node y Supabase [cite: 7, 14]
    skills: ["Node.js", "Express", "APIs REST", "Supabase", "Auth"],
  },
  {
    title: "Diseño & Herramientas",
    // Reflejando tu formación en NUCBA y herramientas de trabajo [cite: 8, 17]
    skills: ["UX/UI Design", "Figma", "Git/GitHub", "Vercel", "Notion", "Vite"],
  },
  {
    title: "Formación & Soft Skills",
    // Resaltando tus 700hs de Henry y tu enfoque social [cite: 16, 18]
    skills: ["Full Stack Developer (700hs)", "Metodologías Ágiles", "Análisis de Usuario", "Trabajo en Equipo"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-16">
          Habilidades Técnicas
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="group">
              <h3 className="text-xl font-display text-foreground mb-6 group-hover:text-primary transition-colors border-b border-primary/10 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-[11px] font-body font-medium bg-secondary/50 text-secondary-foreground rounded-sm border border-transparent hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;