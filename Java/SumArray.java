// Sum Arrays

public class SumArray {

  public static double sum(double[] numbers) {
    double soma = 0;
    for(int i = 0; i < numbers.length; i++) {
      soma +=numbers[i];
    }
    return soma;
  }
}