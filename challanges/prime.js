function isPrime(number){
    for(i=2;i<number;i++){
        if(number%i==0){
            return "the number is not Prime"
        }
        
    }
    return "the number is prime";
}
console.log(isPrime(39));

