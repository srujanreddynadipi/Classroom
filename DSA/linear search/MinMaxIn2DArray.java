
import java.util.Arrays;


public class MinMaxIn2DArray {

    public static void main(String[] args) {

        int[][] arr = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        int[] result = MinMaxNum(arr);

        System.out.println(Arrays.toString(result));

        if (result != null) {
            System.out.println("Minimum: " + result[0]);
            System.out.println("Maximum: " + result[1]);
        } else {
            System.out.println("Array is empty.");
        }
    }

    static int[] MinMaxNum(int[][] arr) {
        if (arr.length == 0) {
            return null; // Return -1 if the array is empty
        }

        int min = arr[0][0];
        int max = arr[0][0];

        // int max = Integer.MIN_VALUE;  this also can be used in the palce of max

        // for (int i = 0; i < arr.length; i++) {
        //     for (int j = 0; j < arr[i].length; j++) {
        //         if (min > arr[i][j]) {
        //             min = arr[i][j];
        //         }
        //         if (max < arr[i][j]) {
        //             max = arr[i][j];
        //         }
        //     }
        // }
        for (int[] arr1 : arr) {
            for (int j = 0; j < arr1.length; j++) {
                if (min > arr1[j]) {
                    min = arr1[j];
                }
                if (max < arr1[j]) {
                    max = arr1[j];
                }
            }
        }

        // Return the minimum value found
        return new int[]{min, max};
    }
}
