export const grow = (arr: number[]): number => arr.sort((a, b) => a - b).reduce((a, b) => a * b);
