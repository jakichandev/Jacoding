import Navbar from "../components/Navbar";
import { Form } from "../components/Form";

const Collaborate = () => {
  return (
    <>
      <Navbar navState="sm" />
      <section className="px-sections-mobile md:px-sections py-6 box-border">
        <Form />
      </section>
    </>
  );
};

export default Collaborate;
