import React from "react";

interface GlassContainerInterface {
  opacity?: string;
  children: React.ReactNode;
  className: string;
}

const GlassContainer = ({ opacity = "80", children, className }: GlassContainerInterface) => {
  return (
    <div className={`relative mx-sections overflow-hidden rounded-lg border-2 border-opacity ${className}`}>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br via-35% to-65% from-bg-dark-extra via-txt to-bg-dark-extra z-10 blur-lg opacity-${opacity} hover:translate-8 hover:scale-110 transition-all duration-500`}
      ></div>
      {children}
    </div>
  );
};

export default GlassContainer;
