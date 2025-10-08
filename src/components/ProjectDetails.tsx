import {
  useNavigate,
  useParams,
  type NavigateOptions,
  type To,
} from "react-router-dom";
import { projects } from "../data/projects";
import { useEffect, useState } from "react";
import type { Project } from "../types/Project/Project";
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
    function navigateByCondition() {
      if (typeof dest === "number") navigate(dest);
      else navigate(dest, options);
    }
    return new Promise((resolve) => {
      resolve(
        setTimeout(() => {
          navigateByCondition();
        }, 500)
      );
    });
  };

  return (
    <>
      <div
        onClick={async () => {
          await closeModal("/portfolio");
          setIsOpen(false);
        }}
        className="overlay fixed top-0 left-0 z-40 w-full h-full bg-bg-dark-extra opacity-90 overflow-y-hidden cursor-pointer"
      ></div>
      <GlassContainer
        opacity="80"
        className={`fixed top-30 h-auto left-1/2 -translate-x-1/2 w-[93vw] md:w-[70vw] z-50 p-2 transition-all duration-300 ${animation}`}
      >
        <div className="banner relative top-0 left-0 h-full w-full">
          <div className="relative z-200 flex flex-col justify-between h-full gap-12">
            <div className="flex flex-row gap-2 w-full">
              <Heading
                text={project?.label}
                className="text-white text-3xl md:text-5xl font-bold justify-self-start"
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
              className="h-[40vh] w-full object-center object-cover rounded-lg"
              src={`/${project?.image}`}
              alt={`${project?.label} Screenshot`}
            />
            <p className="text-white font-p-1 text-ellipsis text-center">
              {project?.body}
            </p>
            <div className="flex justify-between justify-self-end">
              <ul className="flex gap-2">
                {project?.stack?.map((tech) => (
                  <img
                    width={30}
                    src={`/${tech.icon}`}
                    alt={`${tech.name} icon`}
                  ></img>
                ))}
              </ul>
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
        </div>
      </GlassContainer>
    </>
  );
};
