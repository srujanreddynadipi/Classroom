public class main {
    public static void main(String[] args) {
        int[] arr = {-12,-4,-1,0,2,4,5,8,8,8,8,11,23,45};
        int target = 8;
        int result = binarySearch(arr, target);
        if (result != -1) {
            System.out.println("The target found at " + result);
        } else {
            System.out.println("The target not found in the array");
        }
    }

    // return the index
    static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            // find the middle element
            int mid = start + (end - start) / 2;

            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}
       

