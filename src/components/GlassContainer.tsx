import React from "react";

interface GlassContainerProps {
  opacity?: "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "card" | "hero" | "image";
  hover?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = ({ 
  opacity = "60", 
  children, 
  className = "",
  variant = "default",
  hover = false
}) => {
  const baseStyles = "overflow-hidden rounded-lg border-2 border-white/20 backdrop-blur-sm";
  
  const variants = {
    default: "p-6",
    card: "p-4 transition-all duration-300",
    hero: "p-8 md:p-12",
    image: "p-0"
  };

  const hoverStyles = hover ? "hover:border-white/40 hover:scale-[1.02]" : "";

  const backgroundOpacity: Record<string, string> = {
    "20": "opacity-20",
    "30": "opacity-30",
    "40": "opacity-40",
    "50": "opacity-50",
    "60": "opacity-60",
    "70": "opacity-70",
    "80": "opacity-80",
    "90": "opacity-90"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-theme-gray-800 via-theme-aqua-900 to-theme-gray-950 blur-3xl ${backgroundOpacity[opacity]} -z-10 transition-all duration-500`}
      />
      {children}
    </div>
  );
};

export default GlassContainer;
