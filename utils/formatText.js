export const formatText = (text, maxLength = 150) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength - 3) + "...";
  } else if (text.length < maxLength) {
    return text.padEnd(maxLength, " ");
  }
  return text;
};
