import { ExternalLink, Github, Rocket, Beaker, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectGallery from "./ProjectGallery";
import SectionHeader from "./ui-system/SectionHeader";
import TechBadge from "./ui-system/TechBadge";

interface ProjectImage {
  src: string;
  title: string;
}

interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];

  images: ProjectImage[];

  links: {
    github?: string;
    live?: string;
    statusText?: string;
  };
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
        problem: "Gestión manual de trámites con alta demora administrativa. Las consultas externas por profesionales se gestionaban por correo, tardando semanas en responderse y perdiendo oportunidades de contratación.",
        solution: "Sistema de autogestión profesional con validación de estados y una plataforma de consulta pública en tiempo real. Ahora las empresas visualizan los profesionales disponibles y consultan al instante.",
        tech: ["React", "Supabase", "TypeScript", "PostgreSQL"],
        images: [
          {
            src: "/projects/antropologia/2.png",
            title: "Plataforma Institucional - Colegio de Antropólogos"
          },
          {
            src: "/projects/antropologia/3.png",
            title: "Plataforma Institucional - Colegio de Antropólogos"
          },
          {
            src: "/projects/antropologia/4.png",
            title: "Plataforma Institucional - Colegio de Antropólogos"
          },          {
            src: "/projects/antropologia/5.png",
            title: "Plataforma Institucional - Colegio de Antropólogos"
          },
          
        ],
        links: { live: "https://www.colegioantropologiajujuy.com.ar//" },
      },
      {
        title: "Jujuy Conecta Diario",
        problem: "Necesidad de una infraestructura ágil e independiente para gestionar un flujo de noticias diario, evitando la dependencia de CMS genéricos y pesados.",
        solution: "Diario digital con arquitectura escalable. Desarrollé un panel administrativo optimizado para el trabajo simultáneo de 3 editores, garantizando la publicación y actualización de notas al instante.",
        tech: ["Vite", "TypeScript", "Tailwind CSS", "Supabase"],
        images: [
          { 
            src: "/projects/jc/1.png", 
            title: "Diario Digital - Jujuy Conecta" 
          },
          { 
            src: "/projects/jc/2.png", 
            title: "Diario Digital - Jujuy Conecta" 
          },
          { 
            src: "/projects/jc/3.png", 
            title: "Diario Digital - Jujuy Conecta" 
          },
        ],
        links: { live: "https://diario.jujuyconecta.com/" },
      }
    ]
  },
  {
    id: "ecommerce",
    label: "E-commerce & Plataformas B2C",
    description: "Soluciones de venta digital enfocadas en la conversión, SEO y autogestión del cliente.",
    icon: <Beaker className="text-primary" size={20} />, // Puedes usar otro ícono como ShoppingCart de lucide-react
    type: "featured",
    projects: [
      {
        title: "Catálogo Digital Autogestionable – Tierra Arcilla",
        problem: "Una emprendedora local necesitaba digitalizar su inventario para compartirlo por WhatsApp, pero los CMS tradicionales (WordPress/Tiendanube) resultaban costosos y complejos de mantener.",
        solution: "Desarrollé una SPA (Single Page Application) desde cero con un panel de administración intuitivo. Implementé carga masiva de productos (CSV), optimización SEO dinámica (Open Graph) para previsualizaciones impecables en WhatsApp, y base de datos en tiempo real. Proyecto acelerado utilizando metodologías de AI Pair Programming.",
        tech: ["React", "Vite", "TypeScript", "Supabase", "Tailwind", "AI-Assisted Dev"],
        images: [{ src: "/projects/4.png", title: "Catálogo Digital Autogestionable - Tierra Arcilla" }], // Asegúrate de agregar una buena captura del catálogo o del dashboard
        links: {
          live: "https://tierra-arcilla.vercel.app/",
          github: "https://github.com/pablitomartinez/tierra-arcilla-catalog"
        }
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
        problem: "Falta de un canal digital confiable y de alta autoridad para la captación de clientes en el ámbito académico.",
        solution: "Web institucional optimizada para conversión con una arquitectura de información estratégica, facilitando el embudo de captación de leads.",
        tech: ["React", "Tailwind CSS", "SEO"],
        images: [{ src: "/projects/3.png", title: "Asesoramiento Tesis - Plataforma Profesional" }],
        links: { live: "https://www.asesoramientotesis.com/" }
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">

        <Reveal>
          {/* <div className="mb-20 max-w-2xl text-right ml-auto">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="text-foreground text-5xl md:text-7xl font-display leading-tight">
              Proyectos con <br />
              <span className="italic text-primary/80">impacto real.</span>
            </h2>
          </div> */}
          <div className="mb-20 max-w-2xl text-left md:text-right md:ml-auto">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">
              Portfolio
            </p>
            <h2 className="text-foreground text-3xl sm:text-5xl md:text-7xl font-display leading-tight">
              Proyectos con <br className="hidden md:inline" />{" "}
              <span className="italic text-primary/80">impacto real.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-40">
          {CONTENT.map((category) => (
            <div key={category.id} className="space-y-12">
              <div className="flex flex-col gap-2 border-l-2 border-primary/20 pl-6">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-display tracking-tight text-foreground">{category.label}</h3>
                </div>
                <p className="text-muted-foreground text-sm max-w-xl">{category.description}</p>
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
  const yButtons = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <article ref={ref} className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      <div className="w-full lg:w-3/5">
        <Reveal>
          <ProjectGallery images={project.images} />
        </Reveal>
      </div>

      <div className="w-full lg:w-2/5 space-y-6">
        <Reveal delay={200}>
          <h4 className="text-foreground text-3xl md:text-4xl font-display leading-tight mb-4">{project.title}</h4>
          <div className="space-y-4">
            <div className="relative pl-6 border-l-2 border-primary/10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">El Desafío</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/20">
              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">La Solución</p>
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{project.solution}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            {project.tech.map((t) => (
              <TechBadge key={t}>
                {t}
              </TechBadge>
            ))}
          </div>

          <motion.div style={{ y: yButtons }} className="flex flex-wrap gap-4 pt-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-[11px] font-black tracking-[0.2em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
              >
                <Github size={14} className="group-hover:rotate-12 transition-transform" />
                CÓDIGO
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-surface border border-border backdrop-blur-md text-foreground rounded-full text-[11px] font-black tracking-[0.2em] hover:border-primary/50 transition-all flex items-center gap-2 group"
              >
                <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                EN VIVO
              </a>
            )}

            {project.links.statusText && (
              <span className="text-xs text-muted-foreground italic border border-border px-4 py-2 rounded-full bg-surface">
                {project.links.statusText}
              </span>
            )}
          </motion.div>
        </Reveal>
      </div>
    </article>
  );
};

const SmallProjectCard = ({ project }: { project: Project }) => (
  <Reveal>
    <div className="h-full p-8 rounded-2xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all flex flex-col justify-between group">
      <div>
        <h4 className="text-xl font-display mb-4 text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.solution}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap max-w-[70%]">
          {project.tech.map(t => (
            <span key={t} className="text-[9px] font-bold text-primary/60 uppercase tracking-wider">{t}</span>
          ))}
        </div>
        <div className="flex gap-3 text-muted-foreground">
          {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={18} /></a>}
          {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>}
        </div>
      </div>
    </div>
  </Reveal>
);

export default Projects;