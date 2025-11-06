interface ButtonInterface {
  children?: React.ReactNode;

  dimensions?: {
    width: string;
    height: string;
  };
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  className,
  onClick,
  type = "button",
}: ButtonInterface) => {
  return (
    <button
      className={`font-headings-2 px-3 py-1.5 uppercase rounded-lg relative overflow-hidden flex items-center justify-center hover:scale-105 ring-theme-azure-500 shadow-theme-aqua-500 transition-transform duration-200 ${className}`}
      onClick={onClick}
      type={type}
    >
      <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-br from-theme-aqua-500 via-theme-gray-900 to-theme-aqua-800 -z-10 blur-sm opacity-90"></div>
      {children}
    </button>
  );
};

export default Button;
