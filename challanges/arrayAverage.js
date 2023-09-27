var numbers = [1, 2, 3, 4, 5, 6, 7, 12];
var sum=0;
for(i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
    var average=sum / numbers.length;
}
console.log(average);