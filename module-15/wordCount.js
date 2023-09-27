var speech="i promise that i will work hard to become a web developer";
var count=0;
for(i=0;i<speech.length;i++){
    var char=speech[i];
    if(char==" "){
        count++;
    }
}
count++;
console.log(count);