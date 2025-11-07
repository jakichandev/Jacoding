import Navbar from "../components/layout/Navbar";
import { Form } from "../components/form/Form";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import Footer from "../components/layout/Footer";
const ContactMePage = () => {
  return (
    <>
      <Navbar navState="sm" />

      <Section
        paddingY="large"
        extraClasses="flex flex-col items-center gap-8 md:gap-12"
      >
        <Heading>Parlami della tua idea</Heading>
        <Form />
      </Section>
      <Footer />
    </>
  );
};

export default ContactMePage;
