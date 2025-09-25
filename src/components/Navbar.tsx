import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router";
import { routes } from "../routes/routes";
import instagram from "../assets/svg/instagram.svg"
import github from "../assets/svg/github.svg"

const Navbar = ({ navState = "sm" }) => {
  const [navActualState, setNavState] = useState(navState);
  return (
    <nav
      onClick={() => setNavState(navActualState === "sm" ? "lg" : "sm")}
      className={`fixed z-50 rounded-lg border-1 px-2 border-opacity ml-sections-mobile sm:ml-sections mt-6 overflow-hidden flex flex-col items-center animate-navbar transition-all duration-500 overflow-y-auto cursor-pointer ${
        navActualState === "sm" ? "w-28" : "w-64 h-80 justify-normal"}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-txt via-bg-dark-extra to-txt -z-10 blur-lg opacity-100"></div>
      <Logo navbarState={navActualState} width={100} height={100} />
      <ul className={navActualState === "sm" ? "hidden" : "flex flex-col gap-4 my-3 w-full"}>
        {routes.map((route) => (
          <li key={route.id} className="w-full px-4 rounded-lg border-1 border-opacity relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-b from-txt via-bg-dark-plus to-txt -z-10 blur-lg opacity-60"></div>
            <Link to={route.path} className="flex items-center gap-3 text-sm  text-txt-2 hover:text-primary my-2">
              <span><img className="w-8" src={route.icon} alt={route.name}  /></span><h4 className="text-2xl text-txt uppercase font-normal">{route.name}</h4>
            </Link>
          </li>
        ))}
       
        <li className="flex gap-2">
        <Link className="border border-opacity rounded-xl p-2 relative w-10 h-10 z-0" to={"https://www.instagram.com/jacopogianfaldoni/"} target="_blank"><img src={instagram} alt="Instagram Icon" className="icon-btn rounded-lg"></img></Link>
        <Link className="border border-opacity rounded-xl p-2 relative w-10 h-10 z-0" to={"https://github.com/jakichandev"} target="_blank"><img src={github} alt="Github Icon" className="icon-btn rounded-lg"></img></Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
