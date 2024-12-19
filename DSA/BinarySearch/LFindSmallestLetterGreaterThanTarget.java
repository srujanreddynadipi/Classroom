public class LFindSmallestLetterGreaterThanTarget {
    public static void main(String[] args) {
        // this ceiling means that smallest element in the letters array greater or
        // equal to the
        // target
        char[] letters = { 'c', 'f', 'g','i', 'j' };
        char target = 'g';
        int result = Ceiling(letters, target);
        if (result != -1) {
            System.out.println("The target found " + letters[result]);
        }
    }

    // return the index
    static int Ceiling(char[] letters, char target) {

        int start = 0;
        int end = letters.length - 1;

        while (start <= end) {
            // find the middle element
            int mid = start + (end - start) / 2;

            if (target < letters[mid]) {
                end = mid - 1;
            } else   {
                start = mid + 1;
            } 
        }

        return start >= letters.length ? 0 : start; // this returns the start if the start index is less than length or
                                                   // it will send the start = 0 which means first letter beacuse the
                                                   // target is not in the array
    }
}
