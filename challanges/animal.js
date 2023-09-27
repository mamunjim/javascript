// without function
var depth=25;
if(depth<=10){
    var firstPart=depth*50;
    var total=firstPart;
   
}
else if(depth<=20){
    var secondPart=(depth-10)*100;
    total= 500 + secondPart;
    
}
else{
    var thirdPart=(depth-20)*300;
    total=500+10*100+thirdPart;
    
}

console.log(total);



// with function
function mile(depth){
    if(depth<=10){
        var firstPart=depth*50;
        var total=firstPart;
        
    }
    else if(depth<=20){
        var secondPart= (depth-10)*100;
        var total=500+secondPart;
       
    }
    else{
        var thirdPart=(depth-20)*300;
        total=500+ 10*100+thirdPart;
       
    }
    return total;;
}
console.log(mile(11));