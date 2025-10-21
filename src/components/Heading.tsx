interface HeadingType {
  text?: string;
  className?: string;
}

export const Heading: React.FC<HeadingType> = ({ text, className = "" }) => {
  return <h2 className={`uppercase font-headings-2 ${className}`}>{text}</h2>;
};
