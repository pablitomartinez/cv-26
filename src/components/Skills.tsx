import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.categories.frontend"),
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        t("skills.items.responsiveDesign")
      ],
    },
    {
      title: t("skills.categories.backend"),
      skills: [
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "SQL",
        t("skills.items.restApis"),
        t("skills.items.authentication"),
        t("skills.items.rowLevelSecurity")
      ],
    },
    {
      title: t("skills.categories.tools"),
      skills: [
        "Git & GitHub",
        "GitHub Actions",
        "Vercel",
        "Figma",
        t("skills.items.codeReview")
      ],
      complementarySkills: [
        t("skills.items.agentOrchestration"),
        t("skills.items.skills"),
        t("skills.items.mcp"),
        t("skills.items.aiCodeReview")
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-12">
          {t("skills.title")}
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
              {cat.complementarySkills && (
                <>
                  <h4 className="font-display text-lg mt-8 mb-4 text-foreground">
                    {t("skills.categories.ai")}
                  </h4>
                  <ul className="space-y-3">
                    {cat.complementarySkills.map((skill) => (
                      <li key={skill} className="text-muted-foreground font-body flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
