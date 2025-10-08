import { useParams, type NavigateOptions, type To } from "react-router";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import type { Project } from "../types/Project/Project";
import { useNavigate } from "react-router";
import { Heading } from "./Hero";
import Button from "./Button";
import GlassContainer from "./GlassContainer";

interface Animations {
  in?: string;
  out?: string;
}

const animations: Animations = {
  in: "animate-open",
  out: "opacity-0 scale-85",
};

export const ProjectDetails = () => {
  const { label } = useParams();
  const [project, setProject] = useState<Project>();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [animation, setAnimation] = useState<string | undefined>(animations.in);
  const navigate = useNavigate();

  useEffect(() => {
    setProject(projects.find((proj) => proj.label === label));
  }, [label]);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(isOpen ? animations.in : animations.out);
    }, 300);
  }, [isOpen]);

  const closeModal = (dest: To | number, options?: NavigateOptions) => {
    return new Promise<number>((resolve) =>
      resolve(
        setTimeout(() => {
          navigate(dest, options);
        }, 500)
      )
    );
  };

  return (
    <GlassContainer
      opacity="80"
      className={`fixed top-20 md:top-[12.5vh] left-1/2 -translate-x-1/2 w-[92vw] h-[60vh] md:w-[75vw] md:h-[75vh] z-50 p-3 transition-all duration-300 ${animation}`}
    >
      <div className="banner relative bg-bg-dark-extra">
        <div className="relative z-200 flex flex-col">
          <div className="flex flex-row items-center gap-2 w-full">
            <Heading
              text={project?.label}
              className="text-white text-5xl font-bold justify-self-start"
            />
            <Button
              onClick={async () => {
                await closeModal(-1);
                setIsOpen(false);
              }}
              text="< Back"
              className="text-lg text-txt cursor-pointer border-2 border-opacity ml-auto"
            />
            <Button
              onClick={async () => {
                await closeModal("/portfolio");
                setIsOpen(false);
              }}
              text="- Close"
              className="text-lg text-txt mr-2 cursor-pointer border-2 border-opacity"
            />
          </div>

          <img
            className="h-[40vh] w-full object-center object-cover rounded-lg my-4"
            src={`/${project?.image}`}
            alt={`${project?.label} Screenshot`}
          />
          <p className="text-white font-p-1 text-ellipsis">{project?.body}</p>
          <div className="flex items-center gap-2">
            <a className="text-txt underline" href={project?.links?.github}>
              <span className="font-p-1">
                <img width={30} src="/github.svg"></img>
              </span>
            </a>
            <a className="text-txt underline" href={project?.links?.online}>
              <span className="font-p-1 font-bold text-white">
                {project?.links?.online ? "Live Demo" : ""}
              </span>
            </a>
          </div>
        </div>
      </div>
    </GlassContainer>
  );
};
