
public class string {
    public static void main(String[] args) {
        int num = 10;
        int[] arr = { 2, 34, 4, 5, 6, 789, 90 };
        String name = "srujan reddy nadipi";
        System.out.println(name);//srujan reddy nadipi
        String a = "srujan";
        a = "reddy";
        System.out.println(a); // reddy

        String name1 = new String("srujan");
        String name2 = new String("srujan");
        System.out.println(name1 == name2); // false
        System.out.println(name1.equals(name2));
        System.out.println(name1.charAt(5));
    }

    int length() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}
