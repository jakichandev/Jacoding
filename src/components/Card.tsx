import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import GlassContainer from "./GlassContainer";
import type { ProjectCardProps } from "../types/Project/Project";

export const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <GlassContainer opacity="80" className="relative text-center p-2">
      <div className="relative z-20 p-1.5 md:p-2.5">{children}</div>
    </GlassContainer>
  );
};

export const ProjectCard = ({
  label,
  image,
  body,
  stack,
  mode = "expanded",
}: ProjectCardProps) => {
  if (mode === "compact") {
    return (
      <Card>
        <Link
          to={`/portfolio/${label}`}
          className="flex flex-col items-center gap-2"
        >
          <Heading
            text={label}
            className="text-sm md:text-xl text-white font-bold"
          />
          <div className="flex justify-center items-center gap-1.5 flex-wrap">
            {stack.map((tech) => (
              <img
                key={tech.name}
                className="w-4 md:w-6"
                src={`/${tech.icon}`}
                alt={`${tech.name} Icon`}
              />
            ))}
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card>
      <Link to={`/portfolio/${label}`} className="flex flex-col">
        <Heading
          text={label}
          className="text-xl md:text-3xl text-white font-bold mb-4"
        />
        <img
          src={`/${image}`}
          alt={`${label} Screenshot`}
          className="rounded-lg border-2 border-white/30 w-full h-[16rem] md:h-[12rem] object-cover object-center"
        />
        <p className="text-white font-p-1 text-sm my-4 text-left">{body}</p>
        <div className="flex items-center gap-2 mt-auto">
          {stack.map((tech) => (
            <img
              key={tech.name}
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
