export const digitalRoot = (n:number):number => {
  const sum:number = n.toString().split('').map(Number).reduce((acc, e) => acc + e, 0);
  return sum < 10 ? sum : digitalRoot(sum);
};