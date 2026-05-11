import React from "react";

type TechItem = {
  name: string;
  logoUrl?: string;
};

const topRow: TechItem[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind" },
  { name: "Supabase" },
  { name: "Node.js" },
  { name: "Vite" },
  { name: "Figma" },
];

const bottomRow: TechItem[] = [
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Git" },
  { name: "PostgreSQL" },
  { name: "Zod" },
  { name: "Framer" },
  { name: "Jest" },
];

const fadeMask =
  "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)";

const LogoCell = ({ item, id }: { item: TechItem; id: string }) => (
  <div
    key={id}
    className="group/item flex h-14 w-1/4 shrink-0 items-center justify-center px-2 sm:h-16"
    aria-label={item.name}
  >
    {item.logoUrl ? (
      <img
        src={item.logoUrl}
        alt={item.name}
        className="h-5 w-auto object-contain grayscale opacity-40 transition-all duration-500 group-hover/item:opacity-100 group-hover/item:grayscale-0 sm:h-6"
      />
    ) : (
      <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/40 transition-all duration-500 group-hover/item:text-primary group-hover/item:opacity-100 sm:text-xs">
        {item.name}
      </span>
    )}
  </div>
);

const LogoCarousel: React.FC = () => {
  const topLoop = [...topRow, ...topRow];
  const bottomLoop = [...bottomRow, ...bottomRow];

  return (
    <section className="w-full bg-background px-0 py-2">
      <div className="rounded-2xl border border-white/10  px-3 py-5 backdrop-blur-sm sm:px-4 sm:py-6">
        <p className="mb-4 text-center text-[10px] font-semibold tracking-[0.28em] text-foreground/50 sm:mb-5 sm:text-[11px]">
          MI TECH STACK
        </p>

        <div
          className="space-y-2"
          style={{
            maskImage: fadeMask,
            WebkitMaskImage: fadeMask,
          }}
        >
          <div className="overflow-hidden">
            <div className="marquee-left flex min-w-max">
              {topLoop.map((item, index) => (
                <LogoCell item={item} id={`top-${item.name}-${index}`} key={`top-${item.name}-${index}`} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="marquee-right flex min-w-max">
              {bottomLoop.map((item, index) => (
                <LogoCell item={item} id={`bottom-${item.name}-${index}`} key={`bottom-${item.name}-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-left,
        .marquee-right {
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 30s;
        }

        .marquee-left {
          animation-name: stack-marquee-left;
        }

        .marquee-right {
          animation-name: stack-marquee-right;
        }

        @keyframes stack-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes stack-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 640px) {
          .marquee-left,
          .marquee-right {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-left,
          .marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
