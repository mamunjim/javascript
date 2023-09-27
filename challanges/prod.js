// without function
var prod=1;
for(i=1;i<=10;i++){
    prod=prod*i;
}
console.log(prod);


// with function
function multi(number){
    let prod=1;
    for(i=1;i<=number;i++){
        prod=prod*i;
    }
    return prod;
}
console.log(multi(10));