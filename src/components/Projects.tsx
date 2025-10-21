import { Heading } from "./Heading";
import { projects } from "../data/projects";
import { ProjectCard } from "./Card";

export const Projects = () => {
  return (
    <section className="px-sections-mobile md:px-sections py-22 bg-theme-gray-950">
      <Heading
        text="I miei progetti"
        className="text-5xl text-txt text-center"
      />
      <p className="text-txt font-p-1 gap-2 mt-4 font-medium flex items-center justify-center text-sm md:text-normal">
        <span>
          <a href="/">
            <img className="w-7" src="/github.svg"></img>
          </a>
        </span>
        <span>Clicca sull'icona per vedere il mio profilo GitHub</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[30rem_30rem_30rem] my-18 gap-x-4 gap-y-2 mx-auto justify-center">
        {projects.map((project) => (
          <ProjectCard
            label={project["label"]}
            body={project["body"]}
            image={project["image"]}
            stack={project["stack"]}
            links={project["links"]}
          />
        ))}
      </div>
    </section>
  );
};
