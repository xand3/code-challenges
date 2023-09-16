// Calculate Avarege
export function findAverage(arr: number[]): number { 
  const sum: number = arr.reduce((a, b) => a + b, 0);
  return !arr.length ? 0 : sum / arr.length;
}