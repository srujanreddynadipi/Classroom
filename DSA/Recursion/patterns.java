public class patterns {
    public static void main(String[] args) {
        triangle(4, 0);
        Normaltriangle(4, 0);
    }

    static void triangle(int r, int c) {
        if (r == 0) {
            return;
        }
        if (c < r) {
            System.out.print("*");
            triangle(r, c + 1);
        } else {
            System.out.println();
            triangle(r - 1, 0);
        }
    }

    static void Normaltriangle(int r, int c) {
        if (r == 0) {
            return;
        }
        if (c < r) {
            Normaltriangle(r, c + 1);
            System.out.print("*"); // prints after the returning of method
        } else {
            Normaltriangle(r - 1, 0);
            System.out.println();
        }
    }
}
