// with arguments

function addNumbers(){
    var sum=0;
    for(i=0;i<arguments.length;i++){
        var num=arguments[i];
        sum=sum+num;
    }
    console.log(sum);
}
addNumbers(1,2,3,4,5);


// without arguments

function array(numbers){
    var sum=0;
    for(var i=0;i<numbers.length;i++){
        let num=numbers[i];
        sum=sum+num;
    }
    console.log(sum);
}
array([1,2,3,4,5,6])