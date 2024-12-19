


public class OrderAgnostBinarySearch {
    public static void main(String[] args) {
        int[] arr = { -12, -4, -1, 0, 2, 4, 5, 8, 11, 23, 45 };
        // int[] arr = { 45, 23, 11, 8, 5, 4, 2, 0, -1, -4, -12 };
        int target = 8;
        int ans = binarySearch(arr, target);
        System.out.println(ans);
    }

    static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        // Determine if the array is sorted in ascending or descending order
        boolean isAsc = arr[start] < arr[end];

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (arr[mid] == target) {
                return mid; // Target found
            }

            if (isAsc) {
                // If the array is sorted in ascending order
                if (target < arr[mid]) {
                    end = mid - 1; // Search in the left half
                } else {
                    start = mid + 1; // Search in the right half
                }
            } else {
                // If the array is sorted in descending order
                if (target > arr[mid]) {
                    end = mid - 1; // Search in the left half
                } else {
                    start = mid + 1; // Search in the right half
                }
            }
        }
        return -1; // Target not found
    }
}