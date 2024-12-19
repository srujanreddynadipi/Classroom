public class SumOfDigits {
    public static void main(String[] args) {
        int n = 123456789;
        // System.out.println(SumOfDigits(n));
        // reverseNumber(n);
        System.out.println(rever(12345));
    }

    static int SumOfDigits(int n) {
        if (n / 10 < 0) {
            return n;
        }
        int rem = n % 10;
        return rem + SumOfDigits(n / 10);
    }

    static void reverseNumber(int n) {
        if (n / 10 <= 0) {
            return;
        }
        int rem = n % 10;
        System.out.print(rem);
        reverseNumber(n / 10);
    }

    static int rever(int n) {
        if (n == 0) {
            return 0 ;
        }
        int rem = n % 10 ;
        int remDigit = n/10;
        int reversedNum = rever(remDigit);
        return reversedNum * 10 + rem;
    }

    static boolean palin(int n ){
        return n== rev(n);
    }
}
