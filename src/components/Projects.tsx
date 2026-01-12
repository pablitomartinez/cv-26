import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  links: {
    live?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: "TaskFlow",
    problem: "Small teams struggled with project visibility and task handoffs between members.",
    solution: "Built a real-time kanban board with drag-and-drop, team mentions, and activity feeds. Reduced task miscommunication by streamlining workflows.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Metric Dashboard",
    problem: "Marketing team needed a unified view of campaign performance across multiple platforms.",
    solution: "Created an analytics dashboard with data visualization, custom date ranges, and exportable reports. Cut reporting time from hours to minutes.",
    tech: ["React", "Recharts", "REST APIs", "Zustand"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Component Library",
    problem: "Design inconsistencies across products slowed development and frustrated designers.",
    solution: "Developed a documented component library with accessibility built-in, themeable tokens, and Storybook integration.",
    tech: ["React", "TypeScript", "Storybook", "Radix UI"],
    links: {
      github: "#",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-title">Selected Work</p>
        
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                {/* Project number */}
                <div className="md:col-span-1">
                  <span className="text-muted-foreground font-body text-sm">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Content */}
                <div className="md:col-span-11">
                  {/* Title with links */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-display text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label="View live site"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Problem & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1">
                        Problem
                      </p>
                      <p className="text-foreground/80 font-body leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-body font-medium uppercase tracking-wider text-muted-foreground mb-1">
                        Solution
                      </p>
                      <p className="text-foreground/80 font-body leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="border-b border-border mt-16 md:mt-24" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
