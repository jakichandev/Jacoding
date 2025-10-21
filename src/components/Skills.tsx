import { Heading } from "./Heading";
import type { Tech } from "../types/Tech/Tech";


interface TechStack {
  programmingLangs: Tech[];
  frameworks: Tech[];
  tools: Tech[];
}

interface Techs {
  techs: Tech[];
  label: string;
}

const techStack: TechStack = {
  programmingLangs: [
    { name: "HTML5", icon: "/html.svg" },
    { name: "CSS3", icon: "/css.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "NodeJS", icon: "/nodejs.svg" },
  ],
  frameworks: [
    { name: "React", icon: "/react.svg" },
    { name: "Express", icon: "/express.svg" },
    { name: "TailwindCSS", icon: "/tailwind.svg" },
    { name: "Bootstrap", icon: "/bootstrap.svg" },
    { name: "Sass", icon: "/sass.svg" },
  ],
  tools: [
    { name: "Git", icon: "/git.svg" },
    { name: "GitHub", icon: "/github.svg" },
    { name: "vite", icon: "/vite.svg" },
    { name: "Figma", icon: "figma.svg" },
  ],
};

const TechSkill = ({ techs, label }: Techs) => {
  return (
    <article className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center place-content-center text-center">
        <Heading
          text={label}
          className="font-p-1 text-3xl font-extrabold text-white my-6 md:my-auto md:mr-10"
        />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
          {techs.map((tech, index) => (
            <li key={index} className="flex items-center my-1.5">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 mr-2" />
              <span className="text-white text-lg font-p-1 font-bold">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-theme-gray-950 py-22 px-sections-mobile md:px-sections relative z-10 overflow-hidden"
    >
      <div id="overlay-bg" className="absolute bg-[url('/section_background.jpg')] inset-0 w-full h-full z-0 opacity-100 overflow-hidden bg-cover bg-center rotate-180"></div>
      <div className="relative z-50">
      <Heading
        text="Quali tecnologie utilizzo?"
        className="text-center text-5xl text-theme-aqua-300 mb-10"
      />
      <div>
        <TechSkill
          label="Linguaggi di programmazione"
          techs={techStack.programmingLangs}
        />
        <TechSkill label="Frameworks" techs={techStack.frameworks} />
        <TechSkill label="Tools" techs={techStack.tools} />
      </div>
      </div>
    </section>
  );
};
