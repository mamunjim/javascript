// maximum with math.max
var students=[29,50,60,38,10,9,38,85,24,67,84,55];
console.log(Math.max(...students));


// maximum with for loop and condition
var results=[39,40,80,78,50,90,98,85,24,67,64,55];
let max=[0];
for(i=1;i<=results.length;i++){
    if(results[i]>max){
        max=results[i];
    }
}
console.log("largest number is=",max);