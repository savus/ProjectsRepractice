import { ChangeEventHandler, useRef, useState } from "react";
import { TextInput } from "./TextInput";
import { TPhoneInputState } from "../../types";

export const PhoneInput = () => {
  const [phoneInput, setPhoneInput] = useState<TPhoneInputState>(["", "", ""]);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const maxLengths = [3, 3, 4];

  const onChangeEventHandler =
    (index: number): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const value = e.target.value;
      const currentMaxLength = maxLengths[index];
      const nextRef = refs[index < refs.length - 1 ? index + 1 : index];
      const prevRef = refs[index > 0 ? index - 1 : index];
      const shouldGoToNextRef = value.length === currentMaxLength;
      const shouldGoToPrevRef = value.length === 0;

      const newInputState = phoneInput.map((phoneInput, phoneIndex) =>
        index === phoneIndex ? value : phoneInput
      ) as TPhoneInputState;

      if (shouldGoToNextRef) {
        nextRef.current?.focus();
      }

      if (shouldGoToPrevRef) {
        prevRef.current?.focus();
      }

      setPhoneInput(newInputState);
    };

  return (
    <>
      <div>Phone Number</div>
      <TextInput
        labelFor=""
        labelText=""
        inputProps={{
          type: "text",
          value: phoneInput[0],
          onChange: onChangeEventHandler(0),
          ref: refs[0],
          maxLength: maxLengths[0],
        }}
      />{" "}
      -
      <TextInput
        labelFor=""
        labelText=""
        inputProps={{
          type: "text",
          value: phoneInput[1],
          onChange: onChangeEventHandler(1),
          ref: refs[1],
          maxLength: maxLengths[1],
        }}
      />{" "}
      -
      <TextInput
        labelFor=""
        labelText=""
        inputProps={{
          type: "text",
          value: phoneInput[2],
          onChange: onChangeEventHandler(2),
          ref: refs[2],
          maxLength: maxLengths[2],
        }}
      />
    </>
  );
};
