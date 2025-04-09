public class SearchInRange {
    public static void main(String[] args) {
        int[] nums = { 23, 34, 54, 6, 24, 78, 6 };
        int target = 6;
        int ans = RangeSearch(nums, target);
        System.out.println(ans);
        System.out.println(RangeSearch2(nums , target , 1,4));
    }

        // given a array [] then search for a target in the array with the fixed range like index 1,4 only
    static int RangeSearch(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }
        for (int i = 1; i < arr.length-2; i++) {
            int element = arr[i];
            if (element == target) {
                return i;
            }
        }
        // If the loop completes without finding the target, return -1
        return -1;
    }

    //best method
    static int RangeSearch2(int[] arr, int target , int start , int end) {
        if (arr.length == 0) {
            return -1;
        }
        for (int index = start; index < end; index++) {
            int element = arr[index];
            if (element == target) {
                return index;
            }
        }
        // If the loop completes without finding the target, return -1
        return -1;
    }
}