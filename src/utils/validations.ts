import { allCities } from "./all-cities";

export const Validations = {
  isListItemValid: (input: string) => input.length > 0,

  isNameValid: (firstOrLast: string) =>
    firstOrLast
      .split("")
      .every((char) => char.toLowerCase() !== char.toUpperCase()) &&
    firstOrLast.length > 2,

  cityIsValid: (name: string) =>
    allCities
      .map((city) => city.toLocaleLowerCase())
      .includes(name.toLowerCase()),

  isEmailValid(emailAddress: string) {
    // eslint-disable-next-line no-useless-escape
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAddress.match(regex);
  },
};
