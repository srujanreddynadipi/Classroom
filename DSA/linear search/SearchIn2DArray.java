
import java.util.Arrays;

public class SearchIn2DArray {

    public static void main(String[] args) {
        int[][] array = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 }
        };

        int target = 12; // Value to search for
        int[] result = searchIn2DArray(array, target);

        System.out.println(Arrays.toString(result));
        // System.out.println(result); this is not possible

        if (result != null) {
            System.out.println("Value " + target + " found at: Row " + result[0] + ", Column " + result[1]);
        } else {
            System.out.println("Value " + target + " not found in the array.");
        }
    }

    static int[] searchIn2DArray(int[][] arr, int target) {
        for (int i = 0; i < arr.length; i++) { // Loop through rows
            for (int j = 0; j < arr[i].length; j++) { // Loop through columns
                if (arr[i][j] == target) { // Check if the current element is the target
                    return new int[] { i, j }; // Return the position as an array
                }
            }
        }
        return null; // Return null if the target is not found
    }
}