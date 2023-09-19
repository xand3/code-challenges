// Simple Pig Latin

export const pigIt = (str: string): string => {
  return str
    .split(" ")
    .map((s: string) => {
      if (s.match(/[a-z]/i)) {
        return `${s.slice(1)}${s[0]}ay`;
      }
      return s;
    })
    .join(" ");
};
