import type { FormValues } from "../types/Form/Form";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { MailSchema, type MailErrors } from "../types/Form/Form";
import { initialValues } from "../data/formValues";

export const sendMail = async (
  e: React.FormEvent,
  setErrors: (errors: MailErrors) => void,
  setLoading: (loading: boolean) => void,
  formValues: FormValues,
  setFormValues: (values: FormValues) => void,
  setSuccess: (success: boolean) => void
) => {
  e.preventDefault();
  setLoading(true);

  const data = {
    name: `${formValues.name}`,
    surname: `${formValues.surname}`,
    message: formValues.message,
    email: formValues.email,
  };

  const checkForm = MailSchema.safeParse(data);

  if (!checkForm.success) {
    const zErrors = z.flattenError(checkForm.error).fieldErrors;
    setErrors(zErrors);
    setLoading(false);
    return;
  }

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const templateParams = {
    name: checkForm.data.name,
    email: checkForm.data.email,
    message: checkForm.data.message,
  };

  await emailjs.send(serviceID, templateID, templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      setSuccess(true);
      setFormValues(initialValues);
    },
    (err) => {
      console.log("FAILED...", err);
      setErrors({
        message: ["Si è verificato un errore durante l'invio del messaggio."],
      });
    }
  );
  setLoading(false);
};
