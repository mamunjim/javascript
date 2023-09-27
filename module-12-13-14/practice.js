function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime n';
        }
    }
    return 'Your number is a Prime number';
}
var result = isPrime(21);
console.log(result);
