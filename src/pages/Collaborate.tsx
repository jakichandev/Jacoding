import Navbar from "../components/layout/Navbar";
import { Form } from "../components/form/Form";

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
