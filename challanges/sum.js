// without function
var sum=0;
for(i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);




// with function
function total(number){
    let sum=0;
    for(i=1;i<=number;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(total(10));