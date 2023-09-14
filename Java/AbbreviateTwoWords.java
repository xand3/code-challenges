// Abbreviate a Two Word Name

public class AbbreviateTwoWords {
    public static String abbrevName(String name) {
        String[] names = name.split(" ");
        String res = String.format("%S.%S", names[0].substring(0,1), names[1].substring(0,1));
        return res;
    }
}