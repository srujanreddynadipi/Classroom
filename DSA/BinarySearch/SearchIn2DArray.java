import java.util.Arrays;

public class SearchIn2DArray {
    public static void main(String[] args) {
        int[][] array = {
                { 1, 2, 3, 4 },
                { 5, 6, 7, 8 },
                { 9,10,11,12 }
        };

        int target = 8; // Value to search for
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

        int r = 0;
        int c = arr[0].length - 1; // this is the leenght of column

        while (r < arr.length && c >= 0) {
            if (arr[r][c] == target) {
                return new int[] { r, c };
            }
            if (arr[r][c] < target) {
                r++;
            } else {
                c--;
            }
        }
        return new int[] { -1, -1 };
    }
}
