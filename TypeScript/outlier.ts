export function findOutlier(integers: number[]): number {
  let Evens: number[] = integers.filter((num) => num % 2 === 0);
  let Odds: number[] = integers.filter((num) => num % 2 !== 0);
  return Evens.length === 1 ? Evens[0] : Odds[0]
}