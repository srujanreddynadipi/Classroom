
public class AFindMissFromRange0ToN {

    public static void main(String[] args) {
        int[] arr = {3,2,0,1};
        // System.out.println(Arrays.toString(arr));
        System.out.println("the missing number in the array is : " + missingNumber(arr));
    }

    static int missingNumber(int[] arr) {
        int i = 0;
        while (i < arr.length) {
            int correct = arr[i];
            if (arr[i] < arr.length && arr[i] != arr[correct]) {
                swap(arr, i, correct);
            } else {
                i++;
            }
        }
        // search for first missing number
        for (int index = 0; index < arr.length; index++) {
            if (arr[index] != index) { // case 1
                return index;
            }
        }
        // case 2
        return arr.length;
    }

    static void swap(int[] nums, int first, int second) {
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    }

}
