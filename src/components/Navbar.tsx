import Logo from "./Logo";
import { useState } from "react";
import { Link } from "react-router";
import { routes } from "../routes/routes";

const Navbar = ({ navState = "sm" }) => {
  const [navActualState, setNavState] = useState(navState);
  return (
    <nav
      onClick={() => setNavState(navActualState === "sm" ? "lg" : "sm")}
      className={`relative rounded-lg border-1 px-2 border-opacity ml-3 mt-3 overflow-hidden flex flex-col items-center animate-navbar transition-all duration-500 overflow-y-auto ${
        navActualState === "sm" ? "w-28 relative" : "w-64 h-80 justify-normal absolute"}`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-txt-2 via-bg-dark-extra to-txt -z-10 blur-lg opacity-40"></div>
      <Logo navbarState={navActualState} width={100} height={100} />
      <ul className={navActualState === "sm" ? "hidden" : "flex flex-col gap-4 my-3 w-full"}>
        {routes.map((route) => (
          <li key={route.id} className="w-full px-4 rounded-lg border-1 border-opacity relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full via-20% bg-gradient-to-b from-txt via-white to-txt -z-10 blur-lg opacity-60"></div>
            <Link to={route.path} className="flex items-center gap-3 text-sm  text-txt-2 hover:text-primary my-2">
              <span><img className="w-8" src={route.icon} alt={route.name}  /></span><h4 className="text-2xl text-bg-dark uppercase font-normal">{route.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
