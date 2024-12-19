public class binarySeacrch {

    public static void main(String[] args) {
        int[] arr = { 1, 23, 45, 6, 7, 8 };
        int target = 45;
        int ans = search(arr, target, 0, arr.length - 1);
        System.out.println(ans);

        
        System.out.println(fact(5, 1));

    }

    static int search(int[] arr, int target, int s, int e) {
        if (s > e) {
            return 0;
        }
        int mid = s + (e - s) / 2;
        if (target == arr[mid]) {
            return mid;
        }
        if (target > arr[mid]) {
            return search(arr, target, s, mid - 1);
        }
        return search(arr, target, mid + 1, e);
    }

    
}
