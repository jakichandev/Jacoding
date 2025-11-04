import { z } from "zod";

export type FormValues = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

export type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  inputType?: "text" | "email" | "tel" | "textarea";
  setFormValues: (newValues: FormValues) => void;
  formValues: FormValues;
};

export const MailSchema = z.object({
  name: z.string().min(1, "Il nome è obbligatorio").trim(),
  surname: z.string().min(1, "Il cognome è obbligatorio").trim(),
  message: z.string().min(10, "almeno 10 caratteri").trim(),
  email: z.email("Inserisci un'email valida").trim(),
});

export type MailErrors =
  | {
      name?: string[];
      surname?: string[];
      email?: string[];
      message?: string[];
    }
  | undefined;

export type MailType = z.infer<typeof MailSchema>;
