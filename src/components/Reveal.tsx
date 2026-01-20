import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const { ref, inView } = useInView();

  return (
    <>
      {/* Sentinel invisible SOLO para el observer */}
      <span
        ref={ref as any}
        aria-hidden
        className="block h-0 w-0 overflow-hidden"
      />

      {/* Contenedor visual sin romper layout */}
      <div
        style={{ transitionDelay: `${delay}ms` }}
        className={`
          contents
          [&>*]:transition-all
          [&>*]:duration-700
          [&>*]:ease-out
          ${inView
            ? "[&>*]:opacity-100 [&>*]:translate-y-0"
            : "[&>*]:opacity-0 [&>*]:translate-y-8"}
        `}
      >
        {children}
      </div>
    </>
  );
};

export default Reveal;
