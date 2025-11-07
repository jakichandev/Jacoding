import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Section } from "../ui/Section";
import { RocketFilled } from "@ant-design/icons";
import { BackgroundItem1 } from "../ui/Background/Items";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section paddingY="custom" extraClasses="pt-4 pb-22 md:py-22 relative">
      <BackgroundItem1 />
      <GlassContainer
        opacity="60"
        variant="image"
        className="relative bg-[url('/me.png')] bg-cover bg-center md:bg-top flex flex-col items-center justify-end min-h-[70vh]"
      >
        <div className="mb-8 text-theme-aqua-400 mx-2.5 text-center flex flex-col items-center justify-end relative z-20">
          <Heading
            level="custom"
            className="text-5xl md:text-6xl lg:text-7xl font-thin"
          >
            i'm jacopo
          </Heading>
          <Heading
            level="custom"
            className="text-6xl md:text-7xl lg:text-8xl font-medium"
          >
            Frontend
          </Heading>
          <Heading
            level="custom"
            className="text-6xl md:text-7xl lg:text-8xl font-medium"
          >
            Developer
          </Heading>
          <div className="mt-8">
            <Button
              onClick={() => navigate("/projects")}
              className="text-2xl px-6 py-2 ring-2 ring-theme-sunset-end-300 shadow-theme-sunset-end-300 text-theme-sunset-end-200"
            >
              View my projects
              <RocketFilled rotate={45} className="text-xl ml-2" />
            </Button>
          </div>
        </div>
      </GlassContainer>
    </Section>
  );
};

export default Hero;
