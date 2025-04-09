public class Ceiling {
    

    public static void main(String[] args) {
        int[] arr = { -12, -4, -1, 0, 2, 4, 5, 8, 11, 23, 45 };
        int target = 5;
        int result = ceiling(arr, target);
        if (result != -1) {
            System.out.println("The target found " + arr[result]);
        }
    }

    static int ceiling(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        if (target > arr[end]) {
            System.out.println("the target not found");
            return -1;
        }

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return start;
    }
}
    