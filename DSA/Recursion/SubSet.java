public class SubSet {

    public static void main(String[] args) {

        skip("", "baccdah");

    }

    static void skip(String p, String up) {
        //base conditon 
        if (up.isEmpty()) {        // stops when the main string is empty; 
            System.out.println(p);  // print the current p 
            return;  
        }
        char ch = up.charAt(0);

        if (ch == 'a') {
            skip(p, up.substring(1));// this up send the sub string from the index 1 ;
        } else {
            skip(p + ch, up.substring(1)); // this add the new cchar to the  p
        }
    }

}
