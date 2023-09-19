// Your order, please

export function order(words: string): string {
  return words
    .split(" ")
    .sort(
      (a, b) =>
        Number(a.replace(/[a-zA-Z]/g, "")) - Number(b.replace(/[a-zA-Z]/g, ""))
    )
    .join(" ");
}
