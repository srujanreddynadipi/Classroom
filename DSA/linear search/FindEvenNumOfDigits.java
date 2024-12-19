
public class FindEvenNumOfDigits {

    public static void main(String[] args) {
        int[] nums = {1, 12, 345, 122, 0, 0, 3453};
        int result = findnums(nums);
        System.out.println("Numbers with even digits: " + result);
        // System.out.println(digits2(23423));
    }

    static int findnums(int[] nums) {
        int count = 0;
        for (int num : nums) {
            if (even(num)) {
                count++;
            }
        }
        return count;
    }

    private static boolean even(int num) {

        int count = digits(num);

        return count % 2 == 0;
    }

    static int digits(int num) {
        if (num < 0) {
            num = num * -1;
        }
        if (num == 0) {
            return 1;
        }
        int count = 0;
        while (num > 0) {
            count++;
            num = num / 10;
        }
        return count;
    }

    static int digits2(int num){     // another method for finding digits
        if (num < 0) {
            num = num * -1;
        }
        return (int)(Math.log10(num)+1);
    }
}

// public class FindEvenNumOfDigits {
//     public static void main(String[] args) {
//         int[] nums = {1, 12, 345, 122, 3453};
//         List<Integer> evenDigitNumbers = findEvenDigitNumbers(nums);
//         System.out.println("Numbers with even digits: " + evenDigitNumbers);
//     }
//     static List<Integer> findEvenDigitNumbers(int[] nums) {
//         List<Integer> evenDigitList = new ArrayList<>(); // Create a list to hold numbers with even digits
//         if (nums.length == 0) {
//             return evenDigitList; // Return an empty list for an empty array
//         }
//         for (int num : nums) {
//             // Convert the number to a string to count digits
//             String str = String.valueOf(num);
//             if (str.length() % 2 == 0) {
//                 evenDigitList.add(num); // Add the number to the list if it has an even number of digits
//             }
//         }
//         return evenDigitList; // Return the list of numbers with even digits
//     }
// }
