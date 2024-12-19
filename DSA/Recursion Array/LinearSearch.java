import java.util.ArrayList;

public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = { 1, 5, 4, 4, 2, 3, 3, 3, 3, 6, 8 };
        System.out.println(LinearSearch(arr, 0, 8));
        System.out.println(findIndex(arr, 0, 8));
        findAllIndex(arr, 0, 4);
        System.out.println(list);

        ArrayList<Integer> ans = findAllIndex1(arr, 0, 3, new ArrayList<>());
        System.out.println(ans);

        ArrayList<Integer> answer = findAllIndex2(arr, 0, 3);
        System.out.println(answer);

    }

    static boolean LinearSearch(int[] arr, int i, int target) {
        // base conditon
        if (i == arr.length) {
            return false;
        }
        return arr[i] == target || LinearSearch(arr, i + 1, target);
    }

    static int findIndex(int[] arr, int index, int target) {
        // base conditon
        if (index == -1) {
            return -1;
        }
        if (arr[index] == target) {
            return index;
        } else {
            return findIndex(arr, index + 1, target);
        }
    }

    // <------------Method 1 _------------->
    static ArrayList<Integer> list = new ArrayList<>();

    static void findAllIndex(int[] arr, int index, int target) {
        // base conditon
        if (index == arr.length) {
            return;
        }
        if (arr[index] == target) {
            list.add(index);
        }
        findAllIndex(arr, index + 1, target);

        // [2, 3]
    }

    // <---------------Method 2---------------->
    static ArrayList<Integer> range = new ArrayList<>();

    static ArrayList<Integer> findAllIndex1(int[] arr, int index, int target, ArrayList<Integer> range) {
        // base conditon
        if (index == arr.length) {
            return range;
        }
        if (arr[index] == target) {
            range.add(index);
        }
        return findAllIndex1(arr, index + 1, target, range);
        // [5, 6, 7, 8]
    }

    //return the arrayList but dont send the arraylist as a parameter
    static ArrayList<Integer> findAllIndex2(int[] arr, int index, int target) {

        ArrayList<Integer> list = new ArrayList<>();
        if (index == arr.length) {
            return list;
        }
        // this will contain answer for that function call only
        if (arr[index] == target) {
            list.add(index);
        }
        ArrayList<Integer> ansFromBelowCalls = findAllIndex2(arr, index + 1, target);
        list.addAll(ansFromBelowCalls);
        return list;
        // [5, 6, 7, 8]
    }
}
