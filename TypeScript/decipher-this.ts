export function decipherThis(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) return "";
      
      const firstLetter: string = String.fromCharCode(
        Number(word.replace(/\D/g, ""))
      );
      const newString: string = firstLetter + word.match(/[a-zA-z]/g)?.join("");

      const decipherWord: string = firstLetter + lastString(newString) + halfEndString(newString);

      if (Number(word) === firstLetter.charCodeAt(0)) return firstLetter;
      if (newString.length === 2) return newString;
      else if (newString.length > 2) return  decipherWord;
    })
    .join(" ");
}

const halfEndString = (str: string) => str.slice(2, str.length - 1) + str[1];
const lastString = (str: string) => str[str.length - 1];