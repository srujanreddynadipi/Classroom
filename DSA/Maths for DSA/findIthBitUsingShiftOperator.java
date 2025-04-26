public class findIthBitUsingShiftOperator {

    public static void main(String[] args) {
        int number = 29; // Example number
        int i = 3; // Example bit position
        System.out.println(findIthBit(number, i));
    }

    public static int findIthBit(int number, int i) {
        return (number >> (i - 1)) & 1;
    }
}
