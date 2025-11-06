import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Section } from "../ui/Section";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section paddingY="small">
      <GlassContainer
        opacity="60"
        variant="image"
        className="relative bg-[url('/me.png')] bg-cover bg-center md:bg-top flex flex-col items-center justify-end min-h-[70vh]"
      >
        <div className="mb-8 text-theme-aqua-400 mx-2.5 text-center flex flex-col items-center justify-end relative z-20">
          <Heading
            text="I'm Jacopo"
            className="text-5xl md:text-6xl lg:text-7xl font-thin"
          />
          <Heading
            text="frontend"
            className="text-6xl md:text-7xl lg:text-8xl font-medium"
          />
          <Heading
            text="developer"
            className="text-6xl md:text-7xl lg:text-8xl font-medium"
          />
          <div className="mt-8">
            <Button
              onClick={() => navigate("/portfolio")}
              className="text-3xl cursor-pointer"
              text="Guarda i miei progetti"
            />
          </div>
        </div>
      </GlassContainer>
    </Section>
  );
};

export default Hero;
