
import java.lang.reflect.Array;
import java.util.Arrays;

public class Methods {
    public static void main(String[] args) {
        String name = "srujan reddy";
        System.out.println(Arrays.toString((name.toCharArray())));
        System.out.println(name.toLowerCase());
        System.out.println(name.toUpperCase());
        System.out.println(name.indexOf( 'a'));
        System.out.println("reddy".strip());
        System.out.println(Arrays.toString(name.split(" ")));


    }
}
