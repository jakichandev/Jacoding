import logoSVG from "../assets/svg/logo.svg";

interface LogoProps {
  width?: string | number;
  height?: string | number;
  navbarState?: string;
}

const Logo = ({ width, height, navbarState }: LogoProps) => {
  return (
    <img
      className={`transition-all duration-500 relative`}
      width={width}
      height={navbarState === "sm" ? height : "auto"}
      src={logoSVG}
      alt="Site Logo"
    />
  );
};

export default Logo;
