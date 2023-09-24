export const towerBuilder = (nFloors: number): string[] => {
  const tower: string[] = [];
  const width: number = nFloors * 2 - 1;
  const center: number = Math.floor(width / 2);

  for (let i = 0; i < nFloors; i++) {
    const floor: string[] = Array(width).fill(" ");
    for (let j = center - i; j <= center + i; j++) {
      floor[j] = "*";
    }
    tower.push(floor.join(""));
  }
  return tower;
};
