var student=[47,18,91,75,13,47,64,23,44,18,45,64,11,65,98,65,14,64,23,47];
var uniqueNumber=[];
for(i=0;i<student.length;i++){
    var element=student[i];
    if(uniqueNumber.indexOf(element)===-1){
        uniqueNumber.push(element);
    }
}

console.log(uniqueNumber);