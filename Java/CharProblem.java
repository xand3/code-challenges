// Parse nice int from char problem

public class CharProblem {
    public static int howOld(final String herOld) {
        String phrase = herOld.split(" ")[0];
        int age = Integer.parseInt(phrase);
        return age;
    }
}
