public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = { 5, 6, 7, 8, 9, 1, 2, 3 }; // this is the roatated array
        System.out.println(search(arr, 0, arr.length - 1, 2));
    }

    static int search(int[] arr, int s, int e, int target) {
        if (s > e) {
            return -1; // Base case: target not found
        }

        int mid = s + (e - s) / 2;

        if (arr[mid] == target) {
            return mid; // Target found
        }

        // Determine which side is sorted
        if (arr[s] <= arr[mid]) { // Left half is sorted
            if (target >= arr[s] && target < arr[mid]) {
                return search(arr, s, mid - 1, target); // Search in the left half
            } else {
                return search(arr, mid + 1, e, target); // Search in the right half
            }
        } else { // Right half is sorted
            if (target > arr[mid] && target <= arr[e]) {
                return search(arr, mid + 1, e, target); // Search in the right half
            } else {
                return search(arr, s, mid - 1, target); // Search in the left half
            }
        }
    }
}
