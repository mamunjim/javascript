// if else er sahajje

function isBigger(a,b,c){
    if(a>b && a>c){
        return  a+" is bigger";
    }
    // if(a==b ||a==c){
    //     return a+" is bigger";
    // }
    // if(b==c){
    //     return b+" is bigger";
    // }
    else if(b>a && b>c){
        return  b+" is bigger";
    }

    else{
        return  c+" is bigger";
    }
}
console.log(isBigger(5,52,52));


// max er help niye

var p=53;
var q=5;
result=Math.max(p,q);
console.log(result+" is the biggest number");