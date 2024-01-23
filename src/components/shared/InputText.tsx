import { InputProps } from "../../types";

export const InputText = ({ inputProps }: { inputProps: InputProps }) => {
  return (
    <label htmlFor="search">
      <input {...inputProps} />
    </label>
  );
};
