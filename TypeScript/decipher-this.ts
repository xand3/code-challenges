export function decipherThis(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) return "";
      
      const firstLetter: string = String.fromCharCode(
        Number(word.replace(/\D/g, ""))
      );
      const newString: string = firstLetter + word.match(/[a-zA-z]/g)?.join("");

      if (Number(word) === firstLetter.charCodeAt(0)) return firstLetter;
      if (newString.length <= 2) return firstLetter + newString[1];
      else if (newString.length > 2)
        return (
          firstLetter +
          lastString(newString) +
          halfString(newString) +
          newString[1]
        );
    })
    .join(" ");
}

const halfString = (str: string) => str.slice(2, str.length - 1);
const lastString = (str: string) => str[str.length - 1];
