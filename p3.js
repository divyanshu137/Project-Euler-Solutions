var number = 600851475143;
var i = 2;

while (i * i < number) {
    while (number % i == 0) {
        number = number / i;
    }
    i = i + 1;
}

console.log(number)