import { allCities } from "./all-cities";

const listItemIsValid = (input: string) => input.length > 0;

const nameIsValid = (firstOrLast: string) =>
  firstOrLast
    .split("")
    .every((char) => char.toLowerCase() !== char.toUpperCase()) &&
  firstOrLast.length > 2;

const cityIsValid = (name: string) =>
  allCities
    .map((city) => city.toLocaleLowerCase())
    .includes(name.toLowerCase());

const emailIsValid = (emailAddress: string) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
};

const phoneNumIsValid = (num: string[]): boolean => num.join("").length === 10;

export const Validations = {
  listItemIsValid,
  nameIsValid,
  cityIsValid,
  emailIsValid,
  phoneNumIsValid,
};
