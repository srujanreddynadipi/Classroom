
public class main {
    public static void main(String[] args) {
        // write a function that takes in a number and prints it
        // print first 5 numbers 12345
        int n = 1;
        print(n);
    }

    static void print(int n) {

        if (n == 5) {
            System.out.println(5);
            return;
        }
        System.out.println(n);
        print(n + 1);

    }

}
