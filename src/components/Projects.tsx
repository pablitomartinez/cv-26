import { ExternalLink, Github, Rocket, Beaker, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  links: { github?: string; live?: string };
}

interface CategoryGroup {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  type: "featured" | "grid";
  projects: Project[];
}

const CONTENT: CategoryGroup[] = [
  {
    id: "systems",
    label: "Sistemas & Aplicaciones de Negocio",
    description:
      "Aplicaciones web con lógica de negocio, paneles administrativos y flujos reales de usuario.",
    icon: <Rocket className="text-primary" size={20} />,
    type: "featured",
    projects: [
      {
        title: "Plataforma Institucional – Colegio de Antropólogos",
        problem:
          "La gestión de matrículas y validaciones se realizaba manualmente, generando demoras administrativas.",
        solution:
          "Desarrollo de una plataforma con autenticación, estados de validación y consulta pública de profesionales habilitados.",
        tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
        image: "/projects/2.png",
        links: {
          github: "https://github.com/ethercode-tech/antropolog-a-digital",
          live: "https://www.colegioantropologiajujuy.com.ar/"
        }
      },
      {
        title: "Jujuy Conecta Diario",
        problem:
          "Se necesitaba una plataforma propia para administrar contenido periodístico sin depender de CMS tradicionales.",
        solution:
          "Diario digital con panel administrativo, roles de editor y arquitectura preparada para escalar contenido.",
        tech: ["React", "Vite", "Tailwind CSS", "Supabase"],
        image: "/projects/1.png",
        links: {
          github: "https://github.com/altiora-software/diario-jujuyconecta",
          live: "https://diario.jujuyconecta.com/"
        }
      },
      // {
      //   title: "AutoDrive – Gestión Automotriz",
      //   problem:
      //     "La exhibición de vehículos no transmitía correctamente información técnica ni valor visual.",
      //   solution:
      //     "Catálogo dinámico con filtros avanzados, animaciones y experiencia enfocada en conversión visual.",
      //   tech: ["React", "Framer Motion", "Context API"],
      //   image: "/projects/3.png",
      //   links: {
      //     github: "https://github.com/pablitomartinez"
      //   }
      // }
    ]
  },
  {
    id: "business",
    label: "Webs Comerciales & Clientes",
    description:
      "Sitios desarrollados para negocios y servicios profesionales reales.",
    icon: <Briefcase className="text-primary" size={20} />,
    type: "featured",
    projects: [
      {
        title: "Asesoramiento Tesis",
        problem:
          "El cliente necesitaba presencia digital profesional y mejor captación de consultas.",
        solution:
          "Landing institucional optimizada para claridad, confianza y conversión.",
        tech: ["React", "Tailwind CSS", "SEO"],
        image: "/projects/3.png",
        links: {
          live: "https://www.asesoramientotesis.com/"
        }
      }
    ]
  },
  {
    id: "labs",
    label: "Laboratorio & Experimentos",
    description:
      "Herramientas y MVPs enfocados en resolver necesidades puntuales.",
    icon: <Beaker className="text-primary" size={20} />,
    type: "grid",
    projects: [
      {
        title: "Catálogo para Emprendedores",
        problem:
          "Pequeños comercios necesitaban mostrar productos sin depender de marketplaces.",
        solution:
          "MVP liviano y responsive para exhibición rápida de productos.",
        tech: ["React", "Tailwind", "Local Storage"],
        image: "/mockups/emprende.jpg",
        links: {
          github: "https://github.com/pablitomartinez"
        }
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">

        <Reveal>
          <div className="mb-8 max-w-2xl">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="text-muted text-5xl md:text-7xl font-display leading-tight">
              Proyectos <br />
              {/* <span className="italic text-primary/80">impacto operativo.</span> */}
            </h2>
          </div>
        </Reveal>

        <div className="space-y-40">
          {CONTENT.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-display tracking-tight text-foreground">{category.label}</h3>
                </div>
                <p className="text-muted text-sm max-w-xl">{category.description}</p>
              </div>

              {category.type === "featured" ? (
                <div className="space-y-32">
                  {category.projects.map((project, idx) => (
                    <FeaturedProject key={project.title} project={project} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project) => (
                    <SmallProjectCard key={project.title} project={project} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProject = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isEven = index % 2 === 0;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yButtons = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <article ref={ref} className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      <div className="w-full lg:w-3/5 group">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/10 shadow-2xl bg-muted aspect-video">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>

      <div className="w-full lg:w-2/5 space-y-8">
        <Reveal delay={200}>
          <h4 className="text-muted text-3xl md:text-4xl font-display leading-tight">{project.title}</h4>
          <div className="space-y-4">
            <div className="relative pl-6 border-l-2 border-primary/10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">El Desafío</p>
              <p className="text-muted text-sm leading-relaxed italic">{project.problem}</p>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">La Solución</p>
              <p className="text-foreground/90 text-base leading-relaxed">{project.solution}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-4">
            {project.tech.map(t => (
              <span key={t} className="text-[9px] font-bold px-2 py-1 bg-primary/5 text-primary border border-primary/10 rounded">
                {t}
              </span>
            ))}
          </div>
          <motion.div
            style={{ y: yButtons }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary px-6 py-3 text-xs font-bold tracking-[0.15em] text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <Github size={15} />
                GITHUB
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs font-bold tracking-[0.15em] text-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <ExternalLink size={15} />
                VER PROYECTO
              </a>
            )}
          </motion.div>
        </Reveal>
      </div>
    </article>
  );
};

const SmallProjectCard = ({ project }: { project: Project }) => (
  <Reveal>
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <div>
        <h4 className="mb-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h4>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {project.solution}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 text-[10px] font-semibold text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={18} />
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  </Reveal>
);

export default Projects;