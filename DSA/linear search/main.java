public class main {
    public static void main(String[] args) {
        int[] nums = { 23, 34, 54, 6, 24, 78, 6 };
        int target = 116;
        int ans = linearSearch2(nums, target);
        System.out.println(ans);
    }

    // search in the array : return the index if item found if not return -1
    static int linearSearch(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }

        for (int i = 0; i < arr.length; i++) {
            int element = arr[i];
            if (element == target) {
                return i;
            }
        }
        // If the loop completes without finding the target, return -1
        return -1;
    }

    // search in the array : return the element
    static int linearSearch1(int[] arr, int target) {
        if (arr.length == 0) {
            return -1;
        }

        for (int element : arr) { // works like for each lop
            if (element == target) {
                return element;
            }
        }
        // If the loop completes without finding the target, return -1
        return Integer.MAX_VALUE;
    }

    // search in the array : return the true or false
    static  boolean linearSearch2(int[] arr, int target) {
        if (arr.length == 0) {
            return false;
        }

        for (int i = 0; i < arr.length; i++) {
            int element = arr[i];
            if (element == target) {
                return true;
            }
        }
        // If the loop completes without finding the target, return -1
        return false;
    }
}
