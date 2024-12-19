
import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        int[] arr = { 4, 2, 5, 3, 1 };
        insertion(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void insertion(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j > 0; j--) { // this j-- is used to reduce the j value until the it is sorted
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1);
                } else { // if the new element is greater than the last element of sorted then beark the
                         // for loop and go for the next element because the number is sorted
                    break;
                }
            }
        }
    }

    static void swap(int[] nums, int first, int second) {
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    }
}
