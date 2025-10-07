import GlassContainer from "./GlassContainer";
import { Heading } from "./Hero";
import type { Tech } from "../types/Tech/Tech";

export const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <GlassContainer className="text-center p-2">
      <div className="relative z-20 p-1.5 md:p-2.5">{children}</div>
    </GlassContainer>
  );
};

interface ProjectsProps {
  label: string;
  image: string | undefined;
  body: string;
  stack: Tech[];
}

const projects: Array<ProjectsProps> = [
  {
    label: "MeteoMaster",
    image: "meteo.png",
    body: "Il mio Vanilla meteo attraverso l'utilizzo di API REST, CSS con Tailwind",
    stack: [
      { icon: "html.svg", name: "HTML" },
      { icon: "javascript.svg", name: "Javascript" },
      { icon: "tailwind.svg", name: "Tailwind" },
    ],
  },
  {
    label: "Tifodb",
    image: "tifodb.png",
    body: "Piattaforma dedicata agli appassionati del tifo calcistico, informazioni sulle curve italiane e non",
    stack: [
      { icon: "react.svg", name: "React" },
      { icon: "tailwind.svg", name: "Tailwind" },
      { icon: "firebase.svg", name: "Firebase" },
    ],
  },
];

const ProjectCard = ({ label, image, body, stack }: ProjectsProps) => {
  return (
    <Card>
      <Heading text={label} className="text-3xl text-white font-bold" />
      <img
        src={image}
        className="rounded-lg border-2 border-opacity my-4 w-full h-[16rem] md:h-[12rem] object-cover object-center"
      ></img>
      <p className="text-white font-p-1 text-sm my-4">{body}</p>
      <div className="flex items-center gap-1.5 mt-4">
        {stack.map((tech) => (
          <img
            id={tech.name}
            className="w-6"
            src={tech.icon}
            alt={`${tech.name} Icon`}
          />
        ))}
      </div>
    </Card>
  );
};
export const Projects = () => {
  return (
    <section className="px-sections-mobile md:px-sections py-22 bg-bg-dark-extra">
      <Heading
        text="I miei progetti"
        className="text-5xl text-txt text-center"
      />
      <p className="text-txt font-p-1 gap-2 mt-4 font-medium flex items-center justify-center text-sm md:text-">
        <span>
          <a href="/">
            <img className="w-7" src="/github.svg"></img>
          </a>
        </span>
        <span>Clicca sull'icona per vedere il codice sorgente su GitHub!</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 my-18 gap-x-4 gap-y-2">
        {projects.map((project) => (
          <ProjectCard
            label={project["label"]}
            body={project["body"]}
            image={project["image"]}
            stack={project["stack"]}
          />
        ))}
      </div>
    </section>
  );
};
