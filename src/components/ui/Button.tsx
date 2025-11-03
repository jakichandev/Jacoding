interface ButtonInterface {
  text: string;
  dimensions?: {
    width: string;
    height: string;
  };
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  className,
  onClick,
  type = "button",
}: ButtonInterface) => {
  return (
    <button
      className={`font-headings-2 px-3 py-1.5 uppercase rounded-lg relative overflow-hidden flex items-center justify-center hover:scale-105 active:ring-2 ring-theme-aqua-500 shadow-theme-aqua-500 transition-transform duration-200 ${className}`}
      onClick={onClick}
      type={type}
    >
      <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-b from-theme-aqua-500 via-theme-gray-800 to-theme-aqua-500 -z-10 blur-lg opacity-70"></div>
      {text}
    </button>
  );
};

export default Button;
