import { Heading } from "../ui/Heading";
import type { Tech } from "../../types/Tech/Tech";
import { Section } from "../ui/Section";

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
    <article className="my-12 flex flex-col md:grid grid-cols-2 justify-around items-center">
      <Heading
        fontFamily="fontP"
        level="custom"
        color="sunsetEnd"
        className="text-lg md:text-2xl grid-cols-1"
      >
        {`#${label}`}
      </Heading>
      <ul className="grid grid-cols-3 grid-rows-2 gap-2 mt-5">
        {techs.map((tech, index) => (
          <li key={index} className="flex my-2 md:my-0 items-center gap-1.5">
            <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
            <span className="text-white text-sm font-p-1 font-bold">
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const Skills = () => {
  return (
    <Section extraClasses="relative">
      <Heading>Competenze Tecniche</Heading>

      <TechSkill
        label="Linguaggi di programmazione"
        techs={techStack.programmingLangs}
      />
      <TechSkill label="Frameworks" techs={techStack.frameworks} />
      <TechSkill label="Tools" techs={techStack.tools} />
    </Section>
  );
};
