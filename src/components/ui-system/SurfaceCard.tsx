interface SurfaceCardProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const SurfaceCard = ({
    children,
    className = "",
  }: SurfaceCardProps) => {
    return (
      <div
        className={`
          bg-card
          border
          border-border
          rounded-2xl
          p-8
          transition-colors
          ${className}
        `}
      >
        {children}
      </div>
    );
  };
  
  export default SurfaceCard;