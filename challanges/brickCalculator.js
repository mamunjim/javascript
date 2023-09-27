var floor=21;
if(floor==1){
    var firstStep=1500;
    var total=firstStep;
}
else if(floor<=20){
    var secondStep=(floor-1)*1200;
    total=1500+secondStep;
}
else{
    var thirdStep=(floor-20)*1000;
    total=1500+19*1200+thirdStep;
}
console.log(total);


// with function
function brick(floor){
    if(floor==1){
        var firstStep=1500;
        var total=firstStep;
    }
    else if(floor<=20){
        var secondStep=(floor-1)*1200;
        total=1500+secondStep;
    }
    else{
        var thirdStep=(floor-20)*1000;
        total=1500+19*1200+thirdStep;
    }
    return total;
}
console.log(brick(21));