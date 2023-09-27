function positive(array){
    let positiveNumber=[]
    for(i=0;i<array.length;i++){
        var element=array[i];
        if(array[i]>0){
            positiveNumber.push(element);
        }
    }
    return positiveNumber;
}
console.log(positive([1, 2, 3, -4, 5, 6, 7, 12,-5,3, -9]));