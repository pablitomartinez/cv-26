interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "React Query"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Figma", "Vercel", "Storybook", "Vite"],
  },
  {
    title: "Practices",
    skills: ["Responsive Design", "Accessibility", "Performance", "Testing"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-title">Skills</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-display text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
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
