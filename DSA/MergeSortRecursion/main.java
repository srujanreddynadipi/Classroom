
import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1 };
        arr = mergeSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static int[] mergeSort(int[] arr) {
        if (arr.length == 1) {
            return arr;
        }
        int mid = arr.length / 2;
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid)); // this copyOfrange is used to to copy the elements
                                                                 // inthe main arr in to small array with the given
                                                                 // range
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));// continuesly divide the arr into left and
                                                                          // right until the arr size == 1;
        return merge(left, right); // merge the small arrays into the larger one using the merge funtion
    }

    private static int[] merge(int[] first, int[] second) {
        int[] mix = new int[first.length + second.length]; // setting the size of the new arr

        int i = 0;
        int j = 0;
        int k = 0;
        // compare the both arrays indexes and add the smallest array in the mix
        while (i < first.length && j < second.length) {
            if (first[i] < second[j]) {
                mix[k] = first[i];
                i++;
            } else {
                mix[k] = second[j];
                j++;
            }
            k++;
        }
        // it may be possible that one of the arrays is not complete
        // copy the remaining elements if any one is completed
        while (i < first.length) {
            mix[k] = first[i];
            i++;
            k++;
        }
        while (j < second.length) {
            mix[k] = second[j];
            j++;
            k++;
        }
        return mix;
    }

}
