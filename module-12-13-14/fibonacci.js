// fibonacci series=0,1,1,2,3,5,8,13,21,34........
// fibo[2]=fibo[2-1]+fibo[2-2]
// fibo[3]=fibo[3-1]+fibo[3-2]
// fibo[4]=fibo[4-1]+fibo[4-2]
// fibo[n]=fibo[n-1]+fibo[n-2]
// fibo[i]=fibo[i-1]+fibo[i-2]


// fibonacci with loop
var fibo=[0,1];
for(i=2;i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);

// fibonacci with function
var fibo=[0,1];
function fibonacci(number){
    for(i=2;i<=number;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
console.log(fibonacci(15));

// fibonacci with recursive
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    else if(n ==1 ){
        return 1;
    }
    else{
       return fibonacci(n-1)+fibonacci(n-2);
    }
}
console.log(fibonacci(10));