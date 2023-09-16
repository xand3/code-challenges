interface Map {
  [key: string]: number;
}

export function solution(roman: string): number | undefined {
  let romanYears: Map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum: number = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentRomanValue: number = romanYears[roman[i]];
    let nextRomanValue: number = romanYears[roman[i + 1]];

    if (currentRomanValue < nextRomanValue && currentRomanValue !== undefined) {
      sum -= currentRomanValue;
    } else {
      sum += currentRomanValue;
    }
  }
  return sum;
}
