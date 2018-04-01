import java.util.ArrayList;
import java.util.Collections;

class p3 {
    public static void primeFactors(Long n) {
        ArrayList<Long> arr1 = new ArrayList<Long>();
        while (n%2 == 0) {
            arr1.add((long) 2);
            n/=2;
        }

        for(int i = 3; i<Math.sqrt(n); i+=2) {
            while(n%i == 0) {
                arr1.add((long)i);
                n/=i;
            }
        }
        if(n>2){
            arr1.add(n);
        }
        System.out.println(Collections.max(arr1));
    }
    public static void main(String[] args){
        long n = 600851475143L;
        primeFactors(n);
    }
}