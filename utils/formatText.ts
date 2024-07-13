export const formatText = (text: string, maxLength: number = 150): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  } else if (text.length < maxLength) {
    return text.padEnd(maxLength, " ");
  }
  return text;
};
