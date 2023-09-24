// Encrypt this!

export const encryptThis = (str: string): string => {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return "";
      }
      const firstLetter: number = word[0].charCodeAt(0);
      if (word.length === 1) {
        return firstLetter.toString();
      } else if (word.length === 2) {
        return firstLetter + word[1];
      } else {
        const encryptWord: string =
          firstLetter +
          word[word.length - 1] +
          word.slice(2, word.length - 1) +
          word[1];
        return encryptWord;
      }
    })
    .join(" ");
};
