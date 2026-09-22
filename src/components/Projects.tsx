import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { trackEvent } from "@/lib/analytics";
import {
  ExternalLink,
  Github,
  Rocket,
  Beaker,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Reveal from "./Reveal";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef, useState } from "react";

import ProjectGallery from "./ProjectGallery";
import TechBadge from "./ui-system/TechBadge";

/* =========================================================
   TIPOS
   ========================================================= */

interface ProjectImage {
  src: string;
  title: string;
}

interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];

  /**
   * Puntos concretos que permiten mostrar capacidades
   * importantes sin depender solamente del texto principal.
   *
   * Actualmente se utilizan especialmente en Jujuy Conecta.
   */
  highlights?: string[];

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

/* =========================================================
   DATOS DE LOS PROYECTOS
   ========================================================= */

const getContent = (t: TFunction): CategoryGroup[] => [
  {
    id: "systems",
    label: t("projects.categories.systems.label"),
    description: t("projects.categories.systems.description"),
    icon: <Rocket className="text-primary" size={20} />,
    type: "featured",

    projects: [
      /* -----------------------------------------------------
         PROYECTO 01 — BALANCE
         ----------------------------------------------------- */
      {
        title: t("projects.items.balance.title"),
        problem: t("projects.items.balance.problem"),
        solution: t("projects.items.balance.solution"),

        tech: [
          "Next.js",
          "React",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "SQL",
          "Tailwind CSS",
          "PWA",
        ],

        images: [
          {
            src: "/projects/balance/1.png",
            title: t("projects.captions.balanceDashboard"),
          },
          {
            src: "/projects/balance/2.png",
            title: t("projects.captions.balanceExpenses"),
          },
        ],

        links: {
          live: "https://balance-app-indol.vercel.app/",
          github:
            "https://github.com/pablitomartinez/balance-app/",
        },
      },

      /* -----------------------------------------------------
         PROYECTO 02 — COLEGIO DE ANTROPÓLOGOS
         ----------------------------------------------------- */
      {
        title: t("projects.items.anthropology.title"),
        problem: t("projects.items.anthropology.problem"),
        solution: t("projects.items.anthropology.solution"),

        tech: ["React", "Supabase", "TypeScript", "PostgreSQL"],

        images: [
          {
            src: "/projects/antropologia/2.png",
            title: t("projects.items.anthropology.title"),
          },
          {
            src: "/projects/antropologia/3.png",
            title: t("projects.items.anthropology.title"),
          },
          {
            src: "/projects/antropologia/4.png",
            title: t("projects.items.anthropology.title"),
          },
          {
            src: "/projects/antropologia/5.png",
            title: t("projects.items.anthropology.title"),
          },
        ],

        links: {
          live: "https://www.colegioantropologiajujuy.com.ar/",
          github:
            "https://github.com/ethercode-tech/antropolog-a-digital",
        },
      },

      /* -----------------------------------------------------
         PROYECTO 03 — JUJUY CONECTA
         ----------------------------------------------------- */
      {
        title: t("projects.items.jujuyConecta.title"),
        problem: t("projects.items.jujuyConecta.problem"),
        solution: t("projects.items.jujuyConecta.solution"),

        /**
         * Diferenciales del diario:
         * combina trabajo editorial humano con automatización.
         */
        highlights: [
          t("projects.items.jujuyConecta.highlights.editorial"),
          t("projects.items.jujuyConecta.highlights.automation"),
          t("projects.items.jujuyConecta.highlights.management"),
        ],

        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "Python",
          "GitHub Actions",
        ],

        images: [
          {
            src: "/projects/jc/1.png",
            title: t("projects.captions.jujuyConecta"),
          },
          {
            src: "/projects/jc/2.png",
            title: t("projects.captions.jujuyConecta"),
          },
          {
            src: "/projects/jc/3.png",
            title: t("projects.captions.jujuyConecta"),
          },
        ],

        links: {
          live: "https://diario.jujuyconecta.com/",
          github:
            "https://github.com/altiora-software/diario-jujuyconecta",
        },
      },
    ],
  },

  {
    id: "ecommerce",
    label: t("projects.categories.ecommerce.label"),
    description: t("projects.categories.ecommerce.description"),
    icon: <Beaker className="text-primary" size={20} />,
    type: "featured",

    projects: [
      /* -----------------------------------------------------
         PROYECTO 04 — TIERRA ARCILLA
         ----------------------------------------------------- */
      {
        title: t("projects.items.tierraArcilla.title"),
        problem: t("projects.items.tierraArcilla.problem"),
        solution: t("projects.items.tierraArcilla.solution"),

        tech: ["React", "Vite", "TypeScript", "Supabase", "Tailwind"],

        images: [
          {
            src: "/projects/ta/4.png",
            title: t("projects.items.tierraArcilla.title"),
          },
          {
            src: "/projects/ta/10.png",
            title: t("projects.items.tierraArcilla.title"),
          },
          {
            src: "/projects/ta/11.png",
            title: t("projects.items.tierraArcilla.title"),
          },
          {
            src: "/projects/ta/12.png",
            title: t("projects.items.tierraArcilla.title"),
          },
        ],

        links: {
          live: "https://tierra-arcilla.vercel.app/",
          github:
            "https://github.com/pablitomartinez/tierra-arcilla-catalog",
        },
      },
    ],
  },

  {
    id: "business",
    label: t("projects.categories.business.label"),
    description: t("projects.categories.business.description"),
    icon: <Briefcase className="text-primary" size={20} />,
    type: "featured",

    projects: [
      /* -----------------------------------------------------
         PROYECTO 05 — ASESORAMIENTO TESIS
         ----------------------------------------------------- */
      {
        title: t("projects.items.thesis.title"),
        problem: t("projects.items.thesis.problem"),
        solution: t("projects.items.thesis.solution"),

        tech: ["React", "Tailwind CSS", "SEO"],

        images: [
          {
            src: "/projects/3.png",
            title: t("projects.items.thesis.title"),
          },
        ],

        links: {
          live: "https://www.asesoramientotesis.com/",
          github:
            "https://github.com/ethercode-tech/fernanda-herrera-asesoramiento-tesis",
        },
      },
    ],
  },
];

/* =========================================================
   COMPONENTE PRINCIPAL — PROJECTS
   ========================================================= */

const Projects = () => {
  const { t, i18n } = useTranslation();

  /* ---------------------------------------------------------
     ESTADO — PROYECTO SELECCIONADO
     --------------------------------------------------------- */

  const [activeProject, setActiveProject] = useState(0);

  const selectProject = (projectIndex: number) => {
    if (projectIndex === activeProject) return;

    const project = projects[projectIndex];

    setActiveProject(projectIndex);

    trackEvent("select_project", {
      project_name: project.title,
      project_position: projectIndex + 1,
    });
  };

  const projectIndexRef = useRef<HTMLDivElement>(null);

  /* ---------------------------------------------------------
     IDIOMA Y DATOS
     --------------------------------------------------------- */

  const language = i18n.resolvedLanguage ?? "es";

  const content = getContent(
    i18n.getFixedT(language)
  );

  /**
   * Convertimos las categorías existentes en una única lista.
   *
   * No duplicamos información y seguimos utilizando getContent().
   */
  const projects = content.flatMap(
    (category) => category.projects
  );

  /**
   * Textos cortos utilizados únicamente en el índice visual.
   */
  const projectDescriptors = [
    "Finanzas compartidas",
    "Gestión institucional",
    "CMS + automatización",
    "Catálogo digital",
    "Web profesional",
  ];

  const navigateProject = (direction: -1 | 1) => {
    const nextProject = activeProject + direction;

    if (nextProject < 0 || nextProject >= projects.length) return;

    selectProject(nextProject);

    const index = projectIndexRef.current;
    const card = index?.children.item(nextProject);

    if (!index || !card) return;

    const left =
      index.scrollLeft +
      card.getBoundingClientRect().left -
      index.getBoundingClientRect().left -
      (index.clientWidth - card.clientWidth) / 2;

    index.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <section
      key={language}
      id="projects"
      className="py-16 md:py-20 bg-background transition-colors duration-500"
    >
      <div className="container mx-auto px-6">

        {/* =====================================================
            BLOQUE 01 — ENCABEZADO DE LA SECCIÓN
            ===================================================== */}

        <Reveal>
          <div className="mb-10 max-w-2xl text-left md:text-right md:ml-auto">

            <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-3">
              {t("projects.eyebrow")}
            </p>

            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-display leading-tight">
              {t("projects.title")}{" "}

              <br className="hidden md:inline" />{" "}

              <span className="italic text-primary/80">
                {t("projects.titleHighlight")}
              </span>
            </h2>

          </div>
        </Reveal>

        <div className="space-y-10 lg:space-y-8">

          {/* ===================================================
              BLOQUE 02 — PROYECTO ACTIVO
              ===================================================

              Acá mostramos UN solo proyecto a la vez.

              Cuando el usuario selecciona otro proyecto desde
              el índice inferior, AnimatePresence realiza una
              transición corta entre ambos.
              =================================================== */}

          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={`${language}-${activeProject}`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <FeaturedProject
                project={projects[activeProject]}
                index={activeProject}
              />
            </motion.div>
          </AnimatePresence>

          {/* ===================================================
              BLOQUE 03 — ÍNDICE / SELECTOR DE PROYECTOS
              ===================================================

              Desktop:
              grilla horizontal de 5 proyectos.

              Mobile:
              scroll horizontal con snap.

              Cada card cambia el proyecto mostrado arriba.
              =================================================== */}

          <div className="relative">
            {/* ===================================================
                BLOQUE — NAVEGACIÓN MOBILE DEL ÍNDICE
                =================================================== */}

            <div className="md:hidden">
              <button
                type="button"
                aria-label={t("carousel.previous")}
                disabled={activeProject === 0}
                onClick={() => navigateProject(-1)}
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-surface text-primary transition-colors hover:border-primary hover:bg-primary/10 active:bg-primary/15 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                aria-label={t("carousel.next")}
                disabled={activeProject === projects.length - 1}
                onClick={() => navigateProject(1)}
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-surface text-primary transition-colors hover:border-primary hover:bg-primary/10 active:bg-primary/15 disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>

            <div
              ref={projectIndexRef}
              className="
              grid
              auto-cols-[minmax(170px,68%)]
              grid-flow-col
              gap-3
              overflow-x-auto
              px-12
              snap-x
              snap-mandatory
              scroll-px-12
              pb-4
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden

              md:auto-cols-[minmax(220px,1fr)]
              md:grid-flow-row
              md:grid-cols-5
              md:overflow-visible
              md:px-0
              md:pb-0
              md:scroll-px-0
            "
              role="group"
              aria-label={t("projects.title")}
            >
              {projects.map((project, index) => {
                const isActive =
                  index === activeProject;

                const number = String(
                  index + 1
                ).padStart(2, "0");

                return (
                  <button
                    key={project.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => selectProject(index)}
                    className={`
                    group
                    min-h-20
                    md:min-h-24
                    snap-start
                    rounded-lg
                    border
                    px-3
                    py-3
                    md:px-4
                    md:py-3
                    text-left
                    transition-all
                    duration-200

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-background

                    ${isActive
                        ? `
                          border-primary/50
                          bg-surface
                          text-foreground
                        `
                        : `
                          border-border/60
                          bg-background
                          text-muted-foreground
                          hover:border-primary/25
                          hover:bg-surface/60
                          hover:text-foreground
                        `
                      }
                  `}
                  >

                    {/* Número del proyecto */}

                    <span
                      className={`
                      mb-2
                      md:mb-3
                      block
                      text-[11px]
                      font-black
                      tracking-[0.28em]
                      transition-colors

                      ${isActive
                          ? "text-primary"
                          : `
                            text-muted-foreground/60
                            group-hover:text-primary/70
                          `
                        }
                    `}
                    >
                      {number}
                    </span>

                    {/* Nombre */}

                    <span className="block text-base font-display leading-tight tracking-tight">
                      {project.title}
                    </span>

                    {/* Descriptor */}

                    <span className="mt-3 hidden md:mt-1.5 md:block text-xs font-medium leading-relaxed text-muted-foreground">
                      {
                        projectDescriptors[
                        index
                        ]
                      }
                    </span>

                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROYECTO DESTACADO
   =========================================================

   Este componente representa el proyecto actualmente activo.

   Contiene:

   - galería
   - título
   - desafío
   - solución
   - highlights opcionales
   - tecnologías
   - links
   ========================================================= */

const FeaturedProject = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  /**
   * Alternamos izquierda / derecha dependiendo del proyecto
   * seleccionado.
   */
  const isEven = index % 2 === 0;

  /**
   * Animación vertical muy sutil de los botones.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "start end",
      "end start",
    ],
  });

  const yButtons = useTransform(
    scrollYProgress,
    [0, 1],
    [20, -20]
  );

  return (
    <article
      ref={ref}
      className={`
        flex
        flex-col
        gap-6
        md:gap-12
        lg:gap-8
        items-center

        ${isEven
          ? "lg:flex-row"
          : "lg:flex-row-reverse"
        }
      `}
    >

      {/* =====================================================
          GALERÍA DEL PROYECTO
          ===================================================== */}

      <div className="w-full lg:w-3/5 lg:max-w-[720px] lg:min-w-0">
        <Reveal>
          <ProjectGallery
            images={project.images}
          />
        </Reveal>
      </div>

      {/* =====================================================
          INFORMACIÓN DEL PROYECTO
          ===================================================== */}

      <div className="w-full lg:w-2/5 lg:min-w-0">

        <Reveal delay={200}>

          {/* Título */}

          <h4 className="text-foreground text-3xl md:text-4xl font-display leading-tight mb-3">
            {project.title}
          </h4>

          {/* -------------------------------------------------
              DESAFÍO + SOLUCIÓN
              ------------------------------------------------- */}

          {/* RESUMEN MOBILE */}

          {!detailsExpanded && (
            <p className="mb-3 line-clamp-4 text-sm leading-relaxed text-foreground/90 md:hidden">
              {project.solution}
            </p>
          )}

          <button
            type="button"
            aria-expanded={detailsExpanded}
            aria-controls={`project-details-${index}`}
            onClick={() => setDetailsExpanded((expanded) => !expanded)}
            className="mb-2 inline-flex min-h-10 items-center text-sm font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          >
            {t(detailsExpanded ? "projects.hideDetails" : "projects.viewDetails")}
          </button>

          {/* DETALLES EXPANDIBLES MOBILE */}

          <div
            id={`project-details-${index}`}
            className={`${detailsExpanded ? "" : "hidden"} space-y-4 md:block md:space-y-3`}
          >

            {/* Desafío */}

            <div className="relative pl-6 md:pl-4 border-l-2 border-primary/10">

              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">
                {t("projects.challenge")}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.problem}
              </p>

            </div>

            {/* Solución */}

            <div className="relative pl-6 md:pl-4 border-l-2 border-primary/20">

              <p className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1">
                {t("projects.solution")}
              </p>

              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
                {project.solution}
              </p>

            </div>

          </div>

          {/* -------------------------------------------------
              HIGHLIGHTS OPCIONALES
              ------------------------------------------------- */}

          {project.highlights &&
            project.highlights.length >
            0 && (
              <ul className={`${detailsExpanded ? "" : "hidden"} space-y-2 py-2 md:block md:space-y-1 md:py-1`}>

                {project.highlights.map(
                  (highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-primary"
                      />

                      <span>
                        {highlight}
                      </span>

                    </li>
                  )
                )}

              </ul>
            )}

          {/* -------------------------------------------------
              STACK TECNOLÓGICO
              ------------------------------------------------- */}

          <div className="flex flex-wrap gap-1.5 py-2 md:gap-1.5 md:py-1">

            {project.tech.map(
              (tech) => (
                <TechBadge key={tech}>
                  {tech}
                </TechBadge>
              )
            )}

          </div>

          {/* -------------------------------------------------
              LINKS DEL PROYECTO
              ------------------------------------------------- */}

          <motion.div
            style={{
              y: yButtons,
            }}
            className="flex flex-wrap gap-4 pt-4 md:gap-3 md:pt-2"
          >

            {/* GitHub */}

            {project.links.github && (
              <a
                href={
                  project.links.github
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("project_code_click", {
                    project_name: project.title,
                    project_position: index + 1,
                  })
                }
                className="
                  px-6
                  py-2.5
                  bg-primary
                  text-primary-foreground
                  rounded-full
                  text-[11px]
                  font-black
                  tracking-[0.2em]
                  hover:bg-primary/90
                  transition-all
                  shadow-lg
                  shadow-primary/20
                  flex
                  items-center
                  gap-2
                  group
                "
              >
                <Github
                  size={14}
                  className="group-hover:rotate-12 transition-transform"
                />

                {t("projects.code")}
              </a>
            )}

            {/* Proyecto publicado */}

            {project.links.live && (
              <a
                href={
                  project.links.live
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("project_visit", {
                    project_name: project.title,
                    project_position: index + 1,
                  })
                }
                className="
                  px-6
                  py-2.5
                  bg-surface
                  border
                  border-border
                  backdrop-blur-md
                  text-foreground
                  rounded-full
                  text-[11px]
                  font-black
                  tracking-[0.2em]
                  hover:border-primary/50
                  transition-all
                  flex
                  items-center
                  gap-2
                  group
                "
              >
                <ExternalLink
                  size={14}
                  className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                />

                {t("projects.live")}
              </a>
            )}

            {/* Estado opcional */}

            {project.links.statusText && (
              <span className="text-xs text-muted-foreground italic border border-border px-4 py-2 rounded-full bg-surface">
                {
                  project.links
                    .statusText
                }
              </span>
            )}

          </motion.div>

        </Reveal>
      </div>
    </article>
  );
};

/* =========================================================
   CARD PEQUEÑA DE PROYECTO
   =========================================================

   Actualmente el showcase principal utiliza FeaturedProject.

   Se conserva este componente porque forma parte de la
   arquitectura previa y puede volver a utilizarse si más
   adelante agregamos proyectos secundarios.
   ========================================================= */

const SmallProjectCard = ({
  project,
}: {
  project: Project;
}) => (
  <Reveal>

    <div className="h-full p-8 rounded-2xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all flex flex-col justify-between group">

      <div>

        <h4 className="text-xl font-display mb-4 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h4>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.solution}
        </p>

      </div>

      <div className="flex justify-between items-center">

        {/* Tecnologías */}

        <div className="flex gap-2 flex-wrap max-w-[70%]">

          {project.tech.map(
            (tech) => (
              <span
                key={tech}
                className="text-[9px] font-bold text-primary/60 uppercase tracking-wider"
              >
                {tech}
              </span>
            )
          )}

        </div>

        {/* Links */}

        <div className="flex gap-3 text-muted-foreground">

          {project.links.github && (
            <a
              href={
                project.links.github
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          )}

          {project.links.live && (
            <a
              href={
                project.links.live
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <ExternalLink
                size={18}
              />
            </a>
          )}

        </div>

      </div>
    </div>

  </Reveal>
);

export default Projects;
