import Button from "./Button";
import GlassContainer from "./GlassContainer";
import { Heading } from "./Hero";
import { useState } from "react";

export interface FormValues {
  name: string;
  surname: string;
  mail: string;
  telephoneNumber: string;
  textBody: string;
}

export interface FieldProps {
  name: string;
  label: string;
  placeholder: string;
  twStyle: string;
  value?: string;
  id: string;
  inputType: string;
  setFormValues: (newValues: FormValues) => void;
  formValues: FormValues;
}

export const FormField = ({
  name,
  label,
  placeholder = "",
  twStyle,
  id,
  inputType = "text",
  setFormValues,
  formValues,
}: FieldProps) => {
  if (inputType === "textarea") {
    return (
      <div className={twStyle}>
        <label className="font-bold">{label}</label>
        <textarea
          name={name}
          onChange={(evt) =>
            setFormValues({
              ...formValues,
              [name]: evt.target.value,
            })
          }
          rows={4}
          className="bg-txt-2 rounded-lg p-2 text-bg-dark"
        ></textarea>
      </div>
    );
  }
  return (
    <div className={twStyle}>
      <label className="font-bold">{label}</label>
      <input
        className="bg-txt-2 py-1.5 px-5 rounded-lg border-2 border-opacity text-bg-dark font-medium"
        id={id}
        name={name}
        type={inputType}
        placeholder={placeholder}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          setFormValues({
            ...formValues,
            [name]: evt.target.value,
          });
        }}
      />
    </div>
  );
};

export const Form = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    surname: "",
    mail: "",
    telephoneNumber: "",
    textBody: "",
  });

  return (
    <GlassContainer className="w-full flex flex-col items-center px-5">
      <Heading text="collaboriamo" className="text-4xl z-20 text-white my-3" />
      <form className=" text-white relative z-20 font-p-1 w-full">
        <FormField
          name={"name"}
          label={"Nome"}
          placeholder={"inserisci il tuo nome"}
          id={"name"}
          inputType={"text"}
          setFormValues={setFormValues}
          formValues={formValues}
          twStyle="flex flex-col gap-1.5"
        />
        <FormField
          name={"surname"}
          label={"Cognome"}
          placeholder={"inserisci il tuo cognome"}
          id={"surname"}
          inputType={"text"}
          setFormValues={setFormValues}
          formValues={formValues}
          twStyle="flex flex-col gap-1 my-3"
        />
        <FormField
          name={"mail"}
          label={"Email"}
          placeholder={"inserisci la tua email"}
          id={"email"}
          inputType={"mail"}
          setFormValues={setFormValues}
          formValues={formValues}
          twStyle="flex flex-col gap-1 my-3"
        />
        <FormField
          name={"telephoneNumber"}
          label={"Numero di telefono"}
          placeholder={"inserisci il tuo numero di telefono"}
          id={"phone"}
          inputType={"tel"}
          setFormValues={setFormValues}
          formValues={formValues}
          twStyle="flex flex-col gap-1 my-3"
        />
        <FormField
          name={"textBody"}
          label={"Parlami della tua idea!"}
          placeholder={"Minimo 30 caratteri"}
          id={"phone"}
          inputType={"textarea"}
          setFormValues={setFormValues}
          formValues={formValues}
          twStyle="flex flex-col gap-1 mt-2"
        />
        <Button text={"Iniziamo!"} className="my-6 w-full text-3xl" />
      </form>
    </GlassContainer>
  );
};
