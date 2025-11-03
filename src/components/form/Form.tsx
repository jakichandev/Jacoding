import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import { useEffect, useState } from "react";
import * as emailjs from "@emailjs/browser";
import { FormField } from "./FormField";
import type { FormValues } from "../../types/Form/Form";
import { Suspense } from "react";

const initialValues: FormValues = {
  name: "",
  surname: "",
  mail: "",
  telephoneNumber: "",
  textBody: "",
};

export const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const sendMail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const templateParams = {
      from_name: `${formValues.name} ${formValues.surname}`,
      from_email: formValues.mail,
      message: formValues.textBody,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Messaggio inviato con successo!");
        setFormValues(initialValues);
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Si è verificato un errore durante l'invio del messaggio.");
      }
    );
  };

  useEffect(() => {
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  }, []);

  return (
    <>
      <section className="min-h-screen py-24 md:px-sections flex items-center justify-center">
        <GlassContainer
          variant="hero"
          opacity="70"
          className="w-full max-w-3xl flex flex-col items-center px-5 pt-14 pb-2 md:py-12"
        >
          <Heading
            text="collaboriamo"
            className="text-4xl z-20 text-white mb-6"
          />
          <Suspense fallback={<div>Loading...</div>}>
            <form
              onSubmit={sendMail}
              className="text-white relative z-20 font-p-1 w-full space-y-3"
            >
              <FormField
                name="name"
                label="Nome"
                placeholder="inserisci il tuo nome"
                setFormValues={setFormValues}
                formValues={formValues}
              />
              <FormField
                name="surname"
                label="Cognome"
                placeholder="inserisci il tuo cognome"
                setFormValues={setFormValues}
                formValues={formValues}
              />
              <FormField
                name="mail"
                label="Email"
                placeholder="inserisci la tua email"
                inputType="email"
                setFormValues={setFormValues}
                formValues={formValues}
              />
              <FormField
                name="telephoneNumber"
                label="Numero di telefono"
                placeholder="inserisci il tuo numero di telefono"
                inputType="tel"
                setFormValues={setFormValues}
                formValues={formValues}
              />
              <FormField
                name="textBody"
                label="Parlami della tua idea!"
                placeholder="Minimo 30 caratteri"
                inputType="textarea"
                setFormValues={setFormValues}
                formValues={formValues}
              />
              <Button
                type="submit"
                text="Iniziamo!"
                className="my-6 w-full text-3xl"
              />
            </form>
          </Suspense>
        </GlassContainer>
      </section>
    </>
  );
};
