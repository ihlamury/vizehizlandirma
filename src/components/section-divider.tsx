interface SectionDividerProps {
    from: "primary" | "secondary" | "white";
    to: "primary" | "secondary" | "white";
    flip?: boolean;
  }
  
  const colorMap = {
    primary: "#1e3a5f",
    secondary: "#f0f9ff", 
    white: "#ffffff",
  };
  
  export function SectionDivider({ from, to, flip = false }: SectionDividerProps) {
    return (
      <div 
        className={`relative h-12 md:h-16 -mb-1 ${flip ? "rotate-180" : ""}`} 
        style={{ backgroundColor: colorMap[to] }}
      >
        <svg
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ fill: colorMap[from] }}
        >
          <path d="M0 22L60 16.7C120 11 240 1.00001 360 0.700012C480 1.00001 600 11 720 16.7C840 22 960 22 1080 19.3C1200 16.7 1320 11 1380 8.50001L1440 5.70001V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"></path>
        </svg>
      </div>
    );
  }