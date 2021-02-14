import { useField, FieldHookConfig } from "formik";
import { ErrorMessage, Input, Container } from './StyledInputField';

export type InputFieldProps  = {
  label: string;
  id: string;
} & FieldHookConfig<string>;

const InputField = ({ label, id, type, ...props }: InputFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <label htmlFor={id}>{label} </label>{" "}
      <Input
        data-testid={`input-${props.name}`}
        type={type}
        {...field}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>
          {meta.error}
        </ErrorMessage>
      ) : null}
    </Container>
  );
};

export default InputField;
