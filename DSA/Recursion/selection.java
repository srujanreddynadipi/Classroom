import java.util.Arrays;

public class selection {
    public static void main(String[] args) {
        int[] arr = { 1, 4, 6, 7, 4, 2, 3 };
        sort(arr, arr.length, 0, 0);
        System.out.println(Arrays.toString(arr));
    }

    static void sort(int[] arr, int r, int c, int max) {
        if (r == 0) {
            return;
        }
        if (c < r) {
            if (arr[c] > arr[max]) {
                sort(arr, r, c + 1, c);
            } else {
                sort(arr, r, c + 1, max);
            }
        } else {
            int temp = arr[max];
            arr[max] = arr[r - 1];
            arr[r - 1] = temp; // this goes and save in the last one with i--
            sort(arr, r - 1, 0, 0);
        }

    }

    static void maxIndex(int[] arr, int max) {

    }
}
