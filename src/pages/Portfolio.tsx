import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Heading } from "../components/Hero";
import Button from "../components/Button";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/Card";

export const Portfolio = () => {
  return (
    <>
      <Navbar navState="sm" />
      <section className="px-sections-mobile md:px-sections pt-25 box-border h-screen">
        <Heading text="Portfolio" className="text-txt text-6xl" />
        <div className="flex gap-4 my-4">
          <h3 className="text-txt text-2xl font-p-1">Filtri</h3>
          <div className="flex gap-x-1.5">
            <Button text="JAVASCRIPT" className="text-txt border-opacity" />
            <Button text="TAILWIND" className="text-txt border-opacity" />
            <Button text="BACKEND" className="text-txt border-opacity" />
          </div>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
          {projects.map((project) => (
            <ProjectCard
              label={project["label"]}
              body={project["body"]}
              image={project["image"]}
              stack={project["stack"]}
              links={project["links"]}
            />
          ))}
        </main>
      </section>
      <div>
        <Outlet />
      </div>
    </>
  );
};
