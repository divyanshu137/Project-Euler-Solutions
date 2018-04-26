function isPrime(n) {
    if(n <= 1){
        return false;
    }
    if(n == 2) {
        return true;
    }
    if(n % 2 == 0) {
        return false;
    }
    counter = 3;
    while((counter * counter) <= n) {
        if(n % counter == 0) {
            return false;
        } else {
            counter+=2;
        }
    }
    return true;
}

let primeCounter = 1;
let numm = 1;
 
while (primeCounter < 10001) {
    numm = numm + 2;
    if (isPrime(numm)) {
        primeCounter++;
    }
}
console.log(numm);
