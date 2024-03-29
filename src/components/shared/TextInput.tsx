import { InputProps } from "../../types";

export const TextInput = ({
  inputProps,
  labelFor = "",
  labelText = "",
}: {
  inputProps: InputProps;
  labelFor: string;
  labelText: string;
}) => {
  return (
    <label htmlFor={labelFor}>
      {labelText}
      <input id={labelFor} {...inputProps} />
    </label>
  );
};
