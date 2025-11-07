import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { Heading } from "../components/ui/Heading";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/cards/Card";
import { Section } from "../components/ui/Section";
import Footer from "../components/layout/Footer";

export const Portfolio = () => {
  return (
    <>
      <Navbar navState="sm" />
      <Section paddingY="large">
        <Heading>portfolio</Heading>
        {/* <div className="flex gap-4 my-4">
          <h3 className="text-txt text-2xl font-p-1">Filtri</h3>
          <div className="flex gap-x-1.5">
            
          </div>
        </div> */}
        <main className="grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(minmax(100px, 1fr), auto)] gap-x-4 gap-y-2 my-6">
          {projects.map((project) => (
            <ProjectCard
              mode="expanded"
              label={project["label"]}
              body={project["body"]}
              image={project["image"]}
              stack={project["stack"]}
              links={project["links"]}
            />
          ))}
        </main>
      </Section>
      <Footer />
      <div>
        <Outlet />
      </div>
    </>
  );
};
