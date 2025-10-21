import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Navbar navState="sm" />
      <Hero />
      <Services />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
