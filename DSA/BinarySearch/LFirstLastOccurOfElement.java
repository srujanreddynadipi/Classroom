
public class LFirstLastOccurOfElement {
    public static void main(String[] args) {
        int[] nums = { 0, 2, 4, 5, 8, 8, 8, 8, 11, 23, 45 };
        int target = 8;
        int[] result = searchRange(nums, target);

        if (result[0] == -1) {
            System.out.println("The target " + target + " is not found in the array.");
        } else {
            System.out.println(
                    "The target " + target + " found at first index: " + result[0] + " and last index: " + result[1]);
        }
    }

    public static int[] searchRange(int[] nums, int target) {
        int[] ans = { -1, -1 };
        // check for the first occurrence of the target first
        ans[0] = search(nums, target, true);
        ans[1] = search(nums, target, false);

        return ans;
    }

    // this function just return the index value of target
    public static int search(int[] nums, int target, boolean findStartIndex) {
        int start = 0;
        int end = nums.length - 1;
        int ans = -1;

        while (start <= end) {
            // find the middle element
            int mid = start + (end - start) / 2;

            if (target < nums[mid]) {
                end = mid - 1;
            } else if (target > nums[mid]) {
                start = mid + 1;
            } else {
                ans = mid; // Found the target
                if (findStartIndex) {
                    end = mid - 1; // Continue to search in the left half
                } else {
                    start = mid + 1; // Continue to search in the right half
                }
            }
        }
        return ans;
    }
}