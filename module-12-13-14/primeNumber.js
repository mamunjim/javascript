function isPrime(n){
    for(i = 2; i < n; i++) {

       if(n % i == 0){
            return n+ " is a not prime number";
       }
       
    }
    return n+ "is a prime number";
    
}
console.log(isPrime(25));








