
import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 5, 3, 4 };
        cyclic(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void cyclic(int[] arr) {
        int i = 0;
        while (i < arr.length) {
            int correct = arr[i] - 1 ;
            if(arr[i] != arr[correct]){
                swap(arr,i ,correct);
            }else{
                i++;
            }
        }
    }

    static void swap(int[] nums, int first, int second) {
        int temp = nums[first];
        nums[first] = nums[second];
        nums[second] = temp;
    }
}
