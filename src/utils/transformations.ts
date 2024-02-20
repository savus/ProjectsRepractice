export const capitalizeEachWordInString = (
  input: string,
  character: string = ""
) =>
  input
    .split(character)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

export const formatPhoneNumber = (phoneNumberString: string) => {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
};
