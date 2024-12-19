
import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        int[] nums = { 2, 3, 5, 1, 4 };
        selection(nums);
        System.out.println(Arrays.toString(nums));
    }

    static void selection(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            // find the maximun item in the numsay and swap with the i-- index
            int last = nums.length - i - 1;
            int maxIndex = getMaxIndex(nums, 0, last);
            swap(nums, maxIndex, last);
        }
    }

    private static int getMaxIndex(int[] nums, int start, int end) {
        int max = start;

        for (int i = 0; i <= end; i++) {
            if (nums[max] < nums[i]) {
                max = i;
            }
        }
        return max;
    }

    static void swap(int[] nums, int first, int second) {
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    }
}
