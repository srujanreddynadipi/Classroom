public class findMinNum {

    public static void main(String[] args) {

        int[] arr = { 23, 34, 54, 6, 24, 78, 6 };
        int[] result = MinNum(arr);

        if (result != null) {
            System.out.println("Minimum: " + result[0]);
            System.out.println("Maximum: " + result[1]);
        } else {
            System.out.println("Array is empty.");
        }
    }

    static int[] MinNum(int[] arr) {
        if (arr.length == 0) {
            return null; // Return -1 if the array is empty
        }

        int min = arr[0];
        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
            if (max < arr[i]) {
                max = arr[i];
            }
        }


        // Return the minimum value found
        return new int[] { min, max };
    }
}