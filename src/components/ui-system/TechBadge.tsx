interface TechBadgeProps {
    children: React.ReactNode;
  }
  
  const TechBadge = ({ children }: TechBadgeProps) => {
    return (
      <span
        className="
        text-[9px]
        font-bold
        px-2
        py-1
        bg-primary/5
        text-primary
        border
        border-primary/10
        rounded"
      >
        {children}
      </span>
    );
  };
  
  export default TechBadge;