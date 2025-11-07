interface ButtonInterface {
  children?: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  color?: "aqua" | "sunsetEnd";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const BtnStyles = {
  base: "font-headings-2 px-3 py-1.5 uppercase rounded-lg relative overflow-hidden flex items-center justify-center hover:scale-105 cursor-pointer ring-2",
  levels: {
    1: "text-2xl md:text-3xl font-bold",
    2: "text-xl md:text-2xl font-semibold",
    3: "text-lg md:text-xl font-medium",
  },
  colors: {
    aqua: "text-theme-aqua-500 hover:bg-theme-aqua-400 ring-theme-aqua-500",
    sunsetEnd:
      "text-theme-sunset-end-300 hover:bg-theme-sunset-end-400 ring-theme-sunset-end-500",
  },
};

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  color = "aqua",
  level = 1,
}: ButtonInterface) => {
  return (
    <button
      className={`${BtnStyles.base} ${BtnStyles.levels[level]} ${BtnStyles.colors[color]} ${className}`}
      onClick={onClick}
      type={type}
    >
      <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-br from-theme-aqua-500 via-theme-gray-900 to-theme-aqua-800 -z-10 blur-sm opacity-90"></div>
      {children}
    </button>
  );
};

export default Button;
