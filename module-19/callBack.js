function callBack(name, age, task){
    console.log("hello "+name);
    console.log("if you are "+age);
    task();
  
}
function washHand(){
    console.log("go to washroom and wash your hand");
}

function takeShower(){
    console.log("go to washroom and take shower");
}
callBack("mamun",12,washHand);
callBack("jim",15,takeShower);
