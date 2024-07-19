export function fibonacciSequence(): Array<number> {
  let anterior: number = 1
  let proximo: number;
  const res: Array<number> = []

  let i = 0
  while(i < 10) {
    proximo = anterior + 1;
    res.push(anterior, proximo);
    i++
  }
  return res
}
