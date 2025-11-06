import Navbar from "../components/layout/Navbar";
import { profile } from "../data/profile";
import type { Avatar } from "../types/Profile/Profile";
import { Heading } from "../components/ui/Heading";
import GlassContainer from "../components/ui/GlassContainer";

const Avatar = ({ label, image }: Avatar) => {
  return (
    <div className="flex items-center gap-3">
      <img
        className="w-20 h-20 rounded-full object-cover object-center border-2 border-white/30 shadow-lg"
        src={image}
        alt="Jacopo Gianfaldoni"
      />
      <Heading text={label} className="text-3xl md:text-4xl text-white" />
    </div>
  );
};

export const Profile = () => {
  return (
    <>
      <Navbar navState="sm" />
      <section className="py-30 px-sections-mobile md:px-sections grid grid-cols-1 lg:grid-cols-[1fr_4fr] text-txt font-p-1 min-h-[90vh] gap-x-8 gap-y-3">
        <GlassContainer
          opacity="70"
          variant="default"
          className="h-fit overflow-x-auto"
        >
          <Avatar label={profile.name} image={profile.avatar.image} />

          <ul className="flex flex-col text-lg text-white list-none font-p-1 font-bold gap-2 mt-4">
            {profile.contacts.map((contact, index) => (
              <li
                key={index}
                className="hover:text-theme-aqua-500 transition-colors"
              >
                <a href={contact.link} className="flex items-center gap-2">
                  <span className="text-theme-aqua-500">→</span>
                  <span>{contact.content}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="text-white/80 mt-4 text-lg">{profile.age + " anni"}</p>
        </GlassContainer>

        <div className="flex flex-col gap-6">
          <GlassContainer opacity="70" variant="default">
            <Heading
              text="About me"
              className="text-4xl md:text-5xl text-white mb-4"
            />
            <div className="relative">
              <p className="text-white/90 leading-relaxed text-lg">
                {profile.aboutMe}
              </p>
            </div>
          </GlassContainer>

          <GlassContainer opacity="70" variant="default">
            <Heading
              text="Esperienze Lavorative"
              className="text-3xl md:text-4xl text-white mb-4"
            />
            <div className="flex flex-col gap-4">
              {profile.workExperience.map((experience) => (
                <GlassContainer
                  key={experience.name}
                  opacity="50"
                  variant="card"
                  hover={true}
                  className="border-white/30"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-theme-aqua-500 font-semibold">
                      {experience.when.from}
                    </span>
                    <span className="text-white/60">-</span>
                    <span className="text-theme-aqua-500 font-semibold">
                      {experience.when.to}
                    </span>
                  </div>
                  <Heading
                    text={experience.name}
                    className="text-2xl md:text-3xl text-white mb-2"
                  />
                  <p className="text-white/80 text-lg">{experience.where}</p>
                </GlassContainer>
              ))}
            </div>
          </GlassContainer>
        </div>
      </section>
    </>
  );
};
