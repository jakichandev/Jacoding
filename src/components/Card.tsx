import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import GlassContainer from "./GlassContainer";
import type { Project } from "../types/Project/Project";

export const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <GlassContainer opacity="80" className="relative text-center p-2">
      <div className="relative z-20 p-1.5 md:p-2.5">{children}</div>
    </GlassContainer>
  );
};

export const ProjectCard = ({ label, image, body, stack }: Project) => {
  return (
    <Card>
      <Link to={`/portfolio/${label}`}>
        <Heading text={label} className="text-3xl text-white font-bold" />
        <img
          src={`/${image}`}
          className="rounded-lg border-2 border-opacity my-4 w-full h-[16rem] md:h-[12rem] object-cover object-center"
        ></img>
        <p className="text-white font-p-1 text-sm my-4">{body}</p>
        <div className="flex items-center gap-1.5 mt-4">
          {stack.map((tech) => (
            <img
              id={tech.name}
              className="w-6"
              src={`/${tech.icon}`}
              alt={`${tech.name} Icon`}
            />
          ))}
        </div>
      </Link>
    </Card>
  );
};
