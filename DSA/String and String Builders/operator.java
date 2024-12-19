import java.util.ArrayList;

public class operator {
    public static void main(String[] args) {
        System.out.println('a' + 'b');// 195
        System.out.println("a" + "b");// ab
        System.out.println('a' + 3);// 100
        System.out.println((char) ('a' + 3));// d
        System.out.println("a" + 1);// a1
        // this is same as after the few steps
        // integer will be converted to intger that will call the toString()

        System.out.println("srujan" + new ArrayList<>());// srujan[]
        System.out.println("srujan " + new Integer(25));// srujan 25
        System.out.println(new Integer(23) + " " + new ArrayList<>());//23 []
        String ans = new Integer(23) + " " + new ArrayList<>();
        System.out.println(ans);//23 []
        
        for (int i = 0; i < 26; i++) {
            char c = (char)('a' + i);
            System.out.print( c + " ");//a b c d e f g h i j k l m n o p q r s t u v w x y z
        }

    }
}
