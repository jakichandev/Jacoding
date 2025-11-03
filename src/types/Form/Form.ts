export type FormValues = {
  name: string;
  surname: string;
  mail: string;
  telephoneNumber: string;
  textBody: string;
};

export type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  inputType?: "text" | "email" | "tel" | "textarea";
  setFormValues: (newValues: FormValues) => void;
  formValues: FormValues;
};
