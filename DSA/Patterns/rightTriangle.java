
public class rightTriangle {
    public static void main(String[] args) {
        // rightTriangle(5);
        // invertedRightTriangle(5);
        // Triangle(5);
        // rightTriangleNumbers(5);
        // ReverseRightTriangle(5);
        // daimond(5);
        // equtriangle(5);
        // ReverseRightAngledTriangle(5);
        // invertedReverseRightAngledTriangle(5);
        // equtriangleNumbers(5);
        numbersDaimond(5);
    }

    // static void rightTriangle(int n) {
    // for (int i = 0; i < n; i++) {
    // for (int j = 0; j <= i; j++) {

    // }
    // }

    // static void rightTriangleNumbers(int n) {
    // for (int i = 0; i < n; i++) {
    // for (int j = 1; j <= i; j++) {
    // System.out.print(j+" " );
    // }
    // System.out.println();
    // }
    // }

    // static void invertedRightTriangle(int n) {
    // for (int i = 0; i < n; i++) {
    // for (int j = n - i - 1; j >= 0; j--) {
    // System.out.print("* ");
    // }
    // System.out.println("\n");
    // }
    // }

    static void Triangle(int n) {
        for (int i = 0; i < n * 2; i++) {
            int totalColumnsInRow = i > n ? 2 * n - i : i;
            for (int j = 0; j < totalColumnsInRow; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    // *
    // * *
    // * * *
    // * * * *
    // * * * * *
    // * * * *
    // * * *
    // * *
    // *

    static void ReverseRightTriangle(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                System.out.print("_ ");
            }
            System.out.println();
            for (int k = n - 1; k >= 0 + i; k--) {
                System.out.print("* ");
            }

        }

    }

    static void daimond(int n) {
        for (int i = 0; i < n * 2; i++) {
            int totalColumnsInRow = i > n ? 2 * n - i : i;
            int noOfSpaces = n - totalColumnsInRow;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < totalColumnsInRow; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        // *
        // * *
        // * * *
        // * * * *
        // * * * * *
        // * * * *
        // * * *
        // * *
        // *
    }

    static void equtriangle(int n) {
        for (int i = 0; i < n; i++) {
            int noOfSpaces = n - i;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // *
        // * *
        // * * *
        // * * * *
    }

    static void ReverseEqutriangle(int n) {
        for (int i = n; i > 0; i--) {
            int noOfSpaces = n - i;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        // * * * * *
        // * * * *
        // * * *
        // * *
        // *
    }

    static void ReverseRightAngledTriangle(int n) {
        for (int i = 0; i < n; i++) {
            int noOfSpaces = n - i;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // *
        // **
        // ***
        // ****
    }

    static void invertedReverseRightAngledTriangle(int n) {
        for (int i = n; i > 0; i--) {
            int noOfSpaces = n - i;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print(" ");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // *****
        // ****
        // ***
        // **
        // *

    }

    static void equtriangleNumbers(int n) {
        for (int row = 1; row <= n; row++) {
            int noOfSpaces = n - row;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print("  ");
            }
            for (int col = row; col >= 1; col--) {
                System.out.print(col + " ");
            }
            for (int col = 2; col <= row; col++) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
        // 1
        // 2 1 2
        // 3 2 1 2 3
        // 4 3 2 1 2 3 4
        // 5 4 3 2 1 2 3 4 5
    }

    static void numbersDaimond(int n) {
        for (int i = 1; i <= n * 2; i++) {
            int c = i > n ? 2 * n - i : i;
            int noOfSpaces = n - c;
            for (int s = 0; s < noOfSpaces; s++) {
                System.out.print("  ");
            }
            for (int col = c; col >= 1; col--) {
                System.out.print(col + " ");
            }
            for (int col = 2; col <= c; col++) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }

    
}