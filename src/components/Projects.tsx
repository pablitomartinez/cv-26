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
    title: "Plataforma Ethercode",
    problem: "Necesidad de digitalizar procesos administrativos complejos como matriculación y pagos para profesionales habilitados.",
    solution: "Desarrollé áreas públicas y privadas con autenticación, implementando sistemas de consulta de profesionales y gestión de cobros.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase"], 
    links: {
      github: "#", 
    },
  },
  {
    title: "Desarrollo Frontend Freelance",
    problem: "Clientes reales requerían aplicaciones web modernas con flujos de usuario completos y alto rendimiento.",
    solution: "Implementación de interfaces responsivas y dinámicas, integrando APIs REST y asegurando un diseño centrado en el usuario.",
    tech: ["Next.js", "React", "JavaScript (ES6+)", "Tailwind CSS"],
    links: {
      live: "#",
    },
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-16 animate-fade-in">
          Proyectos Seleccionados
        </p>
        
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                {/* Número de proyecto con color de acento */}
                <div className="md:col-span-1">
                  <span className="text-primary/40 font-display text-2xl italic">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Contenido principal */}
                <div className="md:col-span-11">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-3xl md:text-5xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 pt-2">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label="Ver código en GitHub"
                        >
                          <Github size={22} />
                        </a>
                      )}
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label="Ver sitio en vivo"
                        >
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Desglose de Problema y Solución */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-[10px] font-body font-bold uppercase tracking-widest text-primary mb-2">
                        El Desafío
                      </p>
                      <p className="text-muted-foreground font-body leading-relaxed text-balance">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-body font-bold uppercase tracking-widest text-primary mb-2">
                        La Solución
                      </p>
                      <p className="text-foreground/90 font-body leading-relaxed text-balance">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tecnologías con estilo minimalista */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-[10px] font-body font-medium tracking-tighter border border-primary/20 bg-primary/5 text-primary rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Divisor elegante */}
              {index < projects.length - 1 && (
                <div className="border-b border-primary/10 mt-16 md:mt-24" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;