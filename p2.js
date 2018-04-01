fibonacci = function() {
    let a = 1;
    let b = 1;
    let sum = 0;
    let result = 0;
   while(result<4000000) {
       if(result%2 == 0) {
           sum+=result;
       }
       result = a + b;
       b = a;
       a = result;
   }
   console.log(sum);

}
fibonacci();