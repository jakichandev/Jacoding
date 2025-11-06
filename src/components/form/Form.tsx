import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import { useEffect, useState } from "react";
import * as emailjs from "@emailjs/browser";
import { FormField } from "./FormField";
import type { FormValues, MailErrors } from "../../types/Form/Form";
import { initialValues } from "../../data/formValues";
import { sendMail } from "../../services/emailHandler";
import { FormLoader } from "../ui/Loaders";

export const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<MailErrors>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen py-24 md:px-sections flex items-center justify-center">
        <GlassContainer
          variant="hero"
          opacity="70"
          className="w-full max-w-3xl flex flex-col items-center justify-center px-5 py-20 md:py-24"
        >
          <FormLoader />
        </GlassContainer>
      </section>
    );
  }

  if (success) {
    return (
      <section className="min-h-screen py-24 md:px-sections flex items-center justify-center">
        <GlassContainer
          variant="hero"
          opacity="70"
          className="w-full max-w-3xl flex flex-col items-center justify-center px-5 py-20 md:py-24"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Icona di successo */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-theme-aqua-500/20 rounded-full animate-ping"></div>
              <div className="relative flex items-center justify-center w-20 h-20 bg-theme-aqua-500 rounded-full">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Testo di successo */}
            <div className="flex flex-col items-center gap-2">
              <Heading
                text="Messaggio inviato!"
                className="text-3xl md:text-4xl text-theme-aqua-400"
              />
              <p className="text-white/70 font-p-1 text-lg text-center max-w-md">
                Grazie per avermi contattato! Ti risponderò il prima possibile.
              </p>
            </div>

            {/* Bottone per inviare un altro messaggio */}
            <Button
              onClick={() => setSuccess(false)}
              text="Invia un altro messaggio"
              className="mt-4 text-xl"
            />
          </div>
        </GlassContainer>
      </section>
    );
  }

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
          <form
            onSubmit={(e) =>
              sendMail(
                e,
                setErrors,
                setLoading,
                formValues,
                setFormValues,
                setSuccess
              )
            }
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
              name="email"
              label="Email"
              placeholder="inserisci la tua email"
              inputType="email"
              setFormValues={setFormValues}
              formValues={formValues}
            />
            <FormField
              name="message"
              label="Parlami della tua idea!"
              placeholder="Minimo 30 caratteri"
              inputType="textarea"
              setFormValues={setFormValues}
              formValues={formValues}
            />
            <Button
              type="submit"
              text="Iniziamo!"
              className="my-6 w-full text-3xl cursor-pointer"
            />
          </form>
          {errors && (
            <div className="font-p-1 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-4 space-y-1 mt-4 w-full">
              {errors?.name && <p>• {errors.name[0]}</p>}
              {errors?.surname && <p>• {errors.surname[0]}</p>}
              {errors?.email && <p>• {errors.email[0]}</p>}
              {errors?.message && <p>• {errors.message[0]}</p>}
            </div>
          )}
        </GlassContainer>
      </section>
    </>
  );
};
