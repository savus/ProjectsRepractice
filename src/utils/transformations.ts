export const capitalizeEachWordInString = (
  input: string,
  character: string = ""
) =>
  input
    .split(character)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
