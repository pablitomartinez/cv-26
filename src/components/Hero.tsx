import { ArrowDown } from "lucide-react";
import DotGrid from "./react-bits/grid-points";
import SplitText from "../components/react-bits/SplitText";
import Reveal from "./Reveal";
import PixelTransition from "./react-bits/PixelTransition";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center bg-background text-foreground transition-colors duration-500 overflow-hidden">
      {/* Fondo de puntos */}
      <div className="absolute inset-0 z-0 opacity-40">
        <DotGrid
          dotSize={3}
          gap={35}
          baseColor="#10B981"
          activeColor="#ffffff"
          proximity={120}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary font-body text-sm uppercase tracking-[0.3em]">
                Frontend Developer // React & Next.js
              </span>
            </div>

            <Reveal>
              <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6 leading-tight">
                <span className="flex flex-wrap gap-x-4">
                  <SplitText
                    text="Pablo"
                    className="text-foreground"
                    delay={80}
                    tag="span"
                    textAlign="left"
                  />
                  <SplitText
                    text="Martinez"
                    className="text-primary italic"
                    delay={120}
                    tag="span"
                    textAlign="left"
                  />
                </span>
              </h1>
            </Reveal>

            <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed max-w-2xl mb-12">
              Frontend Developer orientado a producto.
              Construyo interfaces claras y flujos completos con React y Next.js en proyectos reales.
              Busco mi primera oportunidad profesional.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <a href="#projects" className="group flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] font-bold">
                <span className="link-underline">Explorar Proyectos</span>
                <span className="text-primary transition-transform group-hover:translate-x-2">→</span>
              </a>
              <a href="#contact" className="link-underline text-muted-foreground hover:text-foreground transition-colors font-body text-sm uppercase tracking-[0.2em]">
                Contactar
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: FOTO CON PIXEL TRANSITION */}
<div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
  <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
    
    <PixelTransition
      gridSize={12}          // Tamaño de los bloques de píxeles
      pixelColor="#10B981"   // Tu verde esmeralda durante la transición
      animationStepDuration={0.4}
      className="w-full h-full"
      style={{
        // Mantenemos el desvanecimiento para que no se vea el corte de la foto
        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
      }}
      firstContent={
        <img 
          src="/foto.sinfondo.png" 
          alt="Pablo Martinez BW" 
          className="w-full h-full object-contain grayscale opacity-80" 
        />
      }
      secondContent={
        <img 
          src="/foto.sinfondo.png" 
          alt="Pablo Martinez Color" 
          className="w-full h-full object-contain grayscale-0" 
        />
      }
    />

    {/* Un resplandor muy suave detrás para dar volumen */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full -z-10 blur-3xl"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;