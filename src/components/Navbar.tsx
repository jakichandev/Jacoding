import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
import instagram from "../assets/svg/instagram.svg"
import github from "../assets/svg/github.svg"

const Navbar = ({ navState = "sm" }) => {
  const [navActualState, setNavState] = useState(navState);
  return (
    <nav
      onClick={() => setNavState(navActualState === "sm" ? "lg" : "sm")}
      className={`fixed bg-theme-gray-900/80 z-500 rounded-lg border-2 border-white/30 px-2 ml-sections-mobile md:ml-sections mt-6 overflow-hidden flex flex-col items-center animate-navbar transition-all duration-500 overflow-y-auto cursor-pointer shadow-xl ${
        navActualState === "sm" ? "w-28" : "w-64 h-80 justify-normal"}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-aqua-800/30 via-theme-gray-800/60 to-theme-gray-900/80 -z-10 blur-xl opacity-70"></div>
      <Logo navbarState={navActualState} width={100} height={100} />
      <ul className={navActualState === "sm" ? "hidden" : "flex flex-col gap-4 my-3 w-full"}>
        {routes.map((route) => (
          <li key={route.id} className="w-full px-4 rounded-lg border-2 border-white/20 hover:border-white/50 relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-aqua-800/20 via-theme-gray-800/40 to-theme-gray-900/60 -z-10 blur-lg"></div>
            <Link to={route.path} className="flex items-center gap-3 text-sm hover:text-white my-2 transition-colors">
              <span className="w-8 h-8 flex items-center justify-center brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(78,205,196,0.6)]">
                <img className="w-full h-full object-contain" src={route.icon} alt={route.name} />
              </span>
              <h4 className="text-2xl text-white uppercase font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{route.name}</h4>
            </Link>
          </li>
        ))}
       
        <li className="flex gap-2 justify-center">
          <Link 
            className="border-2 border-white/30 hover:border-theme-aqua-900/80 rounded-xl p-2 relative w-10 h-10 z-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(78,205,196,0.5)] bg-theme-gray-800/50" 
            to={"https://www.instagram.com/jacopogianfaldoni/"} 
            target="_blank"
          >
            <img src={instagram} alt="Instagram Icon" className="icon-btn rounded-lg brightness-110 contrast-125" />
          </Link>
          <Link 
            className="border-2 border-white/30 hover:border-theme-aqua-900/80 rounded-xl p-2 relative w-10 h-10 z-0 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(78,205,196,0.5)] bg-theme-gray-800/50" 
            to={"https://github.com/jakichandev"} 
            target="_blank"
          >
            <img src={github} alt="Github Icon" className="icon-btn rounded-lg brightness-110 contrast-125" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
