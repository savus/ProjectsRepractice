import { ChangeEventHandler, useRef, useState } from "react";
import { TextInput } from "./TextInput";
import { TPhoneInputState } from "../../types";

export const PhoneInput = () => {
  const [phoneInputState, setPhoneInputState] = useState<TPhoneInputState>([
    "",
    "",
    "",
  ]);

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

      const newInputState = phoneInputState.map((phoneInput, phoneIndex) =>
        phoneIndex === index ? value : phoneInput
      ) as TPhoneInputState;

      if (shouldGoToNextRef) {
        nextRef.current?.focus();
      }

      if (shouldGoToPrevRef) {
        prevRef.current?.focus();
      }

      setPhoneInputState(newInputState);
    };

  return (
    <>
      <div>Phone Number</div>
      <TextInput
        labelFor=""
        labelText=""
        inputProps={{
          type: "text",
          maxLength: maxLengths[0],
          ref: refs[0],
          value: phoneInputState[0],
          onChange: onChangeEventHandler(0),
        }}
      />{" "}
      -
      <TextInput
        labelFor=""
        labelText=""
        inputProps={{
          type: "text",
          maxLength: maxLengths[1],
          ref: refs[1],
          value: phoneInputState[1],
          onChange: onChangeEventHandler(1),
        }}
      />{" "}
      -
      <TextInput
        labelFor=""
        labelText=""
        inputProps={{
          type: "text",
          maxLength: maxLengths[2],
          ref: refs[2],
          value: phoneInputState[2],
          onChange: onChangeEventHandler(2),
        }}
      />
    </>
  );
};
