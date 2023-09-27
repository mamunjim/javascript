var numbers = [1, 2, 3, 40, 5, 6, 7, 12,3];
console.log("get maximum number with math.x=", Math.max(...numbers));

// with for loop
let max=numbers[0];
for(i=0;i<numbers.length;i++){
    var element=numbers[i];
    if(element>max){
        max=element;
    }
}
console.log("get max number with for loop=", max);