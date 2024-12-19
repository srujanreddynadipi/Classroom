import java.lang.reflect.Array;
import java.util.Arrays;

public class PalindromeString {
    public static void main(String[] args) {
        String str = "abcdcba";
        boolean result = isPalindrome(str);
        System.out.println("Is the string a palindrome? " + result);
    }

    static boolean isPalindrome(String str) {
        str = str.toLowerCase(); // Corrected: added parentheses
        for (int i = 0; i < str.length() / 2; i++) { // Corrected: changed <= to <
            char start = str.charAt(i);
            char end = str.charAt(str.length() - 1 - i); // Corrected: changed to str.length() - 1 - i
            if (start != end) { // Added: check for mismatch
                return false; // Not a palindrome
            }
        }
        return true; // Is a palindrome
    }
}