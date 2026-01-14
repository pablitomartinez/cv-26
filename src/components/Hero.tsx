import { ArrowDown } from "lucide-react";
import DotGrid from "./react-bits/grid-points";
import SplitText from "../components/react-bits/SplitText";



const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-background text-foreground transition-colors duration-500">
      <div className="absolute inset-0 z-0 opacity-40">
        <DotGrid
          dotSize={3}          // Puntos más finos y elegantes
          gap={35}             // Espaciado
          baseColor="#10B981"  // Tu verde esmeralda
          activeColor="#ffffff" // Color al pasar el mouse
          proximity={120}      // Radio de interacción
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6">
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
          {/*           
          <h1 className="text-7xl md:text-9xl font-display mb-8 tracking-tighter">
            Pablo <span className="italic text-primary">Martinez</span>
          </h1> */}

          <h1 className="text-5xl md:text-7xl font-display text-foreground mb-6 leading-tight">
            {/* <SplitText
              text="Hola, soy"
              className="block mb-2" // 'block' para que tire el nombre abajo
              delay={50}
              tag="span"
              textAlign="left"
            /> */}

            {/* Contenedor del nombre completo */}
            <span className="flex flex-wrap gap-x-4">
              <SplitText
                text="Pablo"
                className="text-foreground"
                delay={80} // Un poquito de delay extra para que empiece después de 'Hola soy'
                tag="span"
                textAlign="left"
              />

              <SplitText
                text="Martinez"
                className="text-primary italic" // AQUÍ mantenemos tu color verde e itálica
                delay={120} // Empieza último para dar efecto de barrido
                tag="span"
                textAlign="left"
              />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-body leading-relaxed max-w-2xl mb-12">
            Desarrollador de interfaces claras y flujos de usuario completos.
            Especializado en digitalizar procesos con tecnologías modernas.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <a href="#proyectos" className="group flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] font-bold">
              <span className="link-underline">Explorar Proyectos</span>
              <span className="text-primary transition-transform group-hover:translate-x-2">→</span>
            </a>
            <a href="mailto:pablo.emartinez.dev@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm uppercase tracking-[0.2em]">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;