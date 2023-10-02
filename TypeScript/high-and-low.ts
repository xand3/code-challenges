export class Kata {
  static highAndLow(numbers: string): string {
    const arrNum = numbers.split(" ").map(e => parseInt(e))
    return `${Math.max(...arrNum)} ${Math.min(...arrNum)}`
  }
}