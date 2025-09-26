import { Heading } from "./Hero";

interface Tech {
  name: string;
  icon: string;
}

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
    <article className="my-22">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center place-content-center text-center">
        <Heading
          text={label}
          className="font-p-1 text-3xl font-extrabold text-white my-6 md:my-auto md:mr-10"
        />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-4 w-5/6 md:w-full mx-auto">
          {techs.map((tech, index) => (
            <li key={index} className="flex items-center my-1.5 ">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 mr-4" />
              <span className="text-white text-xl font-p-1 font-bold">{tech.name}</span>
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
      className="bg-bg-dark-plus py-22 px-sections-mobile md:px-sections"
    >
      <Heading
        text="Quali tecnologie utilizzo?"
        className="text-center text-5xl text-txt"
      />
      <div>
        <TechSkill
          label="Linguaggi di programmazione"
          techs={techStack.programmingLangs}
        />
        <TechSkill label="Frameworks" techs={techStack.frameworks} />
        <TechSkill label="Tools" techs={techStack.tools} />
      </div>
    </section>
  );
};
