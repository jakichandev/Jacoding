import Button from "./Button";
import GlassContainer from "./GlassContainer";
import { Heading } from "./Heading";
import { useState } from "react";

export interface FormValues {
  name: string;
  surname: string;
  mail: string;
  telephoneNumber: string;
  textBody: string;
}

interface FieldProps {
  name: keyof FormValues;
  label: string;
  placeholder: string;
  inputType?: "text" | "email" | "tel" | "textarea";
  setFormValues: (newValues: FormValues) => void;
  formValues: FormValues;
}

const FormField: React.FC<FieldProps> = ({
  name,
  label,
  placeholder,
  inputType = "text",
  setFormValues,
  formValues,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    const updatedValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedValues);
  };

  const inputClasses = "w-full bg-txt-2 rounded-lg p-2 text-bg-dark font-medium border-2 border-transparent focus:border-theme-aqua-900 focus:outline-none transition-colors";

  if (inputType === "textarea") {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="font-bold text-white">{label}</label>
        <textarea
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          rows={4}
          className={inputClasses}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-bold text-white">{label}</label>
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        onChange={handleChange}
        className={inputClasses + " py-1.5 px-5"}
      />
    </div>
  );
};

export const Form = () => {
  const initialValues: FormValues = {
    name: "",
    surname: "",
    mail: "",
    telephoneNumber: "",
    textBody: "",
  };

  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  return (
    <>
      <section className="min-h-screen py-24 px-sections-mobile md:px-sections flex items-center justify-center">
        <GlassContainer variant="hero" opacity="70" className="w-full max-w-3xl flex flex-col items-center px-5 pt-14 pb-2 md:py-12">
          <Heading text="collaboriamo" className="text-4xl z-20 text-white mb-6" />
          <form className="text-white relative z-20 font-p-1 w-full space-y-3">
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
            <Button text="Iniziamo!" className="my-6 w-full text-3xl" />
          </form>
        </GlassContainer>
      </section>
    </>
  );
};
