
public class Fibonacci {

    public static void main(String[] args) {
      System.out.println(fibo(4));
    }

    static int fibo(int n) {
        //base condfition 
        if(n<2){
            return n;
        }
        return fibo(n - 1) + fibo(n - 2);
    }
    static int
}
