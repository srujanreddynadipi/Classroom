public class Floor {
    public static void main(String[] args) {
        // this ceiling means that greatest element in the array smaller or equal to the
        // target
        int[] arr = { -12, -4, -1, 0, 2, 4, 5, 8, 11, 23, 45 };
        int target = 8;
        int result = Floor(arr, target);
        if (result != -1) {
            System.out.println("The target found " + arr[result]);
            System.out.println("The target found at " + result + " postion in the array");
        } 
    }

    // return the index
    static int Floor(int[] arr, int target) {
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
        return end; // if the while loop condition is failed then this start will be returned
    }
}
