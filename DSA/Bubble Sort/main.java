
import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        int[] arr = { 4, 2, 5, 3, 1 };
        bubble(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void bubble(int[] arr) {
        // run the step for the n-1 times
        boolean swapped;
        for (int i = 0; i < arr.length; i++) {
            swapped = false;
            // for each step max item will come at the last respective index
            for (int j = 1; j <= arr.length - i - 1; j++) {
                // swap if the item is smaller than the previous item
                if (arr[j] < arr[j - 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    swapped = true;
                }
            }
            // if you did not swap for a particular value of i , it means the array is
            // sorted hence stop the sorting
            if (!swapped) {
                break;
            }

        }
    }

}
