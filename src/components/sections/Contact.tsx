import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { Section } from "../ui/Section";
import { Link } from "react-router-dom";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
import { Heading } from "../ui/Heading";

export const Contact = () => {
  return (
    <Section extraClasses="mb-12 md:mb-0">
      <Heading level="primary" className="mb-10">
        Scopri di più o contattami
      </Heading>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contatto */}
        <GlassContainer variant="default" opacity="60" className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-p-1 text-white/80 font-semibold">
              Hai un progetto in mente o vuoi metterti in contatto?
              <br />
              Scrivimi, rispondo in breve tempo.
            </p>
            <Link to="/contact" aria-label="Vai alla pagina contatti">
              <Button color="aqua" level={2} className="gap-2">
                <MailOutlined />
                Contattami
              </Button>
            </Link>
          </div>
        </GlassContainer>

        {/* Scarica CV */}
        <GlassContainer variant="default" opacity="60" className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-p-1 text-white/80 font-semibold">
              Vuoi il mio CV aggiornato?
              <br />
              Scaricalo in formato PDF.
            </p>
            <a
              href="/JacopoGianfaldoni.pdf"
              download
              aria-label="Scarica il CV in PDF"
              className="inline-block"
              rel="noopener noreferrer"
            >
              <Button color="aqua" level={2} className="gap-2">
                <DownloadOutlined />
                Scarica il CV
              </Button>
            </a>
            <span className="text-white/50 text-sm font-p-1">
              Formato: PDF • Lingua: IT
            </span>
          </div>
        </GlassContainer>
      </div>
    </Section>
  );
};
