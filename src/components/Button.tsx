interface ButtonInterface {
  text: string;
  dimensions?: {
    width: string;
    height: string;
  };
  className?: string;
}

const Button = ({ text, className }: ButtonInterface) => {
  return (
    <button
      className={`font-headings-2  text-txt px-3 py-1.5 text-4xl uppercase rounded-lg border-opacity border-1 relative overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-b from-txt via-bg-dark-extra to-txt -z-10 blur-lg opacity-45"></div>
      {text}
    </button>
  );
};

export default Button;
