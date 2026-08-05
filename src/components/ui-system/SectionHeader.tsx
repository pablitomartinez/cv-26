// src/components/ui-system/SectionHeader.tsx

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description?: string;
  }
  
  const SectionHeader = ({
    eyebrow,
    title,
    description,
  }: SectionHeaderProps) => {
    return (
      <div className="max-w-2xl">
        <p className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">
          {eyebrow}
        </p>
  
        <h2 className="text-foreground text-5xl md:text-7xl font-display leading-tight">
          {title}
        </h2>
  
        {description && (
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  };
  
  export default SectionHeader;