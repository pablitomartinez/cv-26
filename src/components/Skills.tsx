const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Componentes reutilizables y Responsive Design"
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Supabase (Auth, Database, Storage)",
      "PostgreSQL",
      "SQL",
      "APIs REST",
      "Modelado de datos relacionales"
    ],
  },
  {
    title: "Seguridad, Tools & Deployment",
    skills: [
      "Authentication & Authorization",
      "Row Level Security (RLS)",
      "Git & GitHub",
      "GitHub Actions",
      "Vercel",
      "Figma"
    ],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-12">
          Stack y habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="border-l border-primary/20 pl-6">
              <h3 className="font-display text-2xl mb-6 text-foreground">
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground font-body flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
