//multiplication table

export const multiplicationTable = (size: number): number[][] => {
  const table: number[][] = [];
  for (let i: number = 1; i <= size; i++) {
    const row: number[] = [];
    for (let j: number = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
};
