// without function
var numbers = [1, 2, 3, 4, 5, 6, -1];
var sum=0;
for(i=0;i<numbers.length;i++){
    var element=numbers[i];
    sum=sum+element;
}
console.log(sum);


// with function
function array(numbers){
    var sum=0;
    for(i=0;i<numbers.length;i++){
    var element=numbers[i];
    sum=sum+element;
}
return sum;
}
var total=array([1, 2, 3, 4, 5, 6, -1, 25])
console.log("sum will be", total)