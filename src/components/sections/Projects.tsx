import { Heading } from "../ui/Heading";
import { projects } from "../../data/projects";
import { ProjectCard } from "../cards/Card";
import { Section } from "../ui/Section";
import lines from "../../assets/svg/lines.svg";

export const Projects = () => {
  return (
    <Section extraClasses="relative">
      <img
        src={lines}
        alt="Decorative lines"
        className="absolute inset-0 -z-10 w-80 h-full opacity-10"
      />
      <img
        src={lines}
        alt="Decorative lines"
        className="absolute top-0 left-100 -z-10 w-80 h-full opacity-10 rotate-90"
      />
      <img
        src={lines}
        alt="Decorative lines"
        className="absolute top-0 right-0 -z-10 w-80 h-full opacity-10"
      />
      <img
        src={lines}
        alt="Decorative lines"
        className="absolute bottom-0 right-100 -z-10 w-80 h-full opacity-10 rotate-90"
      />
      <img
        src={lines}
        alt="Decorative lines"
        className="absolute bottom-0 right-[calc(50%-(320px/2))] -z-10 w-80 h-full opacity-10"
      />

      <Heading level="primary">I miei progetti</Heading>
      <p className="text-txt font-p-1 gap-2 mt-4 font-medium flex items-center justify-center text-sm md:text-normal">
        <span>
          <a href="/">
            <img className="w-7" src="/github.svg"></img>
          </a>
        </span>
        <span>Clicca sull'icona per vedere il mio profilo GitHub</span>
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 my-18 gap-x-4 gap-y-2 mx-auto justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project["label"]}
            mode="compact"
            label={project["label"]}
            body={project["body"]}
            image={project["image"]}
            stack={project["stack"]}
            links={project["links"]}
          />
        ))}
      </div>
    </Section>
  );
};
