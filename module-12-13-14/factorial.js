// // factorial with for loop

// let factorial=1;
// for(i=1;i<=10; i++){
//     factorial=factorial*i;
//     console.log(i,factorial);
// }





 // factorial with while loop;

// let factorial=1;
// var i=1;
// while(i<=10){
//     i++;
//     factorial=factorial*i;
//     console.log(i,factorial);
// }











// factorial with function

function factorial(n){
    let fact=1;
    for(var i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
var result=factorial(10);
console.log(result);
