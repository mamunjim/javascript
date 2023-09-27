// loop er sahajje
var students=[29,50,60,38,10,9,38,85,24,67,84,55,25];
let sum=0;
for(i=0;i<students.length;i++){
    sum=sum+students[i];
}
console.log(sum);


// functionn er sahajje
function result(array){
    let total=0;
    for(i=0;i<array.length;i++){
        total=total+array[i];
    }
    return total;
}
var array=[38,10,9,38,85,24,67,84,55,25];
console.log(result(array));