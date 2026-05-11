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
    description: "Plataformas operativas con lógica de permisos y gestión de datos compleja.",
    icon: <Rocket className="text-primary" size={20} />,
    type: "featured",
    projects: [
      {
        title: "Plataforma Institucional – Colegio de Antropólogos",
        problem: "Gestión manual de trámites y matrículas con alta demora administrativa.",
        solution: "Sistema de autogestión profesional con validación de estados y consultas públicas en tiempo real.",
        tech: ["React", "Supabase", "TypeScript", "PostgreSQL"],
        image: "/mockups/antropologos.jpg",
        links: { live: "#" },
      },
      {
        title: "Jujuy Conecta Diario",
        problem: "Necesidad de una infraestructura propia para gestionar un flujo editorial sin CMS genéricos.",
        solution: "Diario digital completo con roles de editor, panel administrativo y arquitectura escalable.",
        tech: ["Vite", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "/mockups/diario.jpg",
        links: { live: "#" },
      },
      {
        title: "AutoDrive – Gestión Automotriz",
        problem: "Exhibición ineficiente de stock con especificaciones técnicas complejas.",
        solution: "Catálogo dinámico con filtrado avanzado y visualización premium de inventario.",
        tech: ["React", "Framer Motion", "Context API"],
        image: "/mockups/autos.jpg",
        links: { github: "#" }
      }
    ]
  },
  {
    id: "business",
    label: "Desarrollo Web & Clientes",
    description: "Soluciones digitales lanzadas a producción para servicios profesionales.",
    icon: <Briefcase className="text-primary" size={20} />,
    type: "featured",
    projects: [
      {
        title: "Asesoramiento Tesis – Plataforma Profesional",
        problem: "Falta de un canal digital confiable para la captación de clientes académicos.",
        solution: "Web institucional optimizada para conversión con una arquitectura de información de alta autoridad.",
        tech: ["React", "Tailwind CSS", "SEO"],
        image: "/mockups/tesis.jpg",
        links: { live: "https://www.asesoramientotesis.com/" }
      }
    ]
  },
  {
    id: "labs",
    label: "Laboratorio & Herramientas",
    description: "Proyectos técnicos enfocados en resolver necesidades puntuales de usuario.",
    icon: <Beaker className="text-primary" size={20} />,
    type: "grid",
    projects: [
      {
        title: "Catálogo para Emprendedores",
        problem: "Digitalización rápida de productos para pequeños comercios.",
        solution: "MVP de catálogo digital ligero enfocado en velocidad de carga y facilidad de uso.",
        tech: ["React", "Local Storage", "Tailwind"],
        image: "/mockups/emprende.jpg",
        links: { github: "#" }
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
          <motion.div style={{ y: yButtons }} className="flex flex-wrap gap-4 pt-6">
            {project.links.github && (
              <a
                href={project.links.github}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-[11px] font-black tracking-[0.2em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                <Github size={16} className="group-hover:rotate-12 transition-transform" />
                CÓDIGO
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                className="px-8 py-3 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-full text-[11px] font-black tracking-[0.2em] hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-2 group"
              >
                <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                EN VIVO
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
    <div className="h-full p-8 rounded-2xl bg-secondary/20 border border-primary/5 hover:border-primary/20 transition-all flex flex-col justify-between group">
      <div>
        <h4 className="text-xl font-display mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.solution}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap max-w-[70%]">
          {project.tech.map(t => (
            <span key={t} className="text-[9px] font-bold text-primary/60 uppercase">{t}</span>
          ))}
        </div>
        <div className="flex gap-3 text-muted-foreground">
          {project.links.github && <a href={project.links.github} className="hover:text-primary transition-colors"><Github size={18} /></a>}
          {project.links.live && <a href={project.links.live} className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>}
        </div>
      </div>
    </div>
  </Reveal>
);

export default Projects;