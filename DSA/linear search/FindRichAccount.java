public class FindRichAccount {
    public static void main(String[] args) {
        int[][] persons = { { 1, 2, 3 },
                              { 3, 8 },
                              {1,2,4}
                                       };
        int result = maximumWealth(persons);
        System.out.println(result);
    }

    static  int maximumWealth(int[][] persons) {
        int ans = Integer.MIN_VALUE;
        for (int i = 0; i < persons.length; i++) {
            int sum=0;
            for (int j = 0; j < persons[i].length; j++) {
                sum += persons[i][j];
            }
            if(sum>ans){
                ans = sum;
            }
        }
        return ans;
        
    }
}
