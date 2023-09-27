function woodCalculator(chair,table,bed){
    var chairWood=1; //1 feet wood will need
    var tableWood=3;  //3 feet wood will need
    var bedWood=5;  //5 feet wood will need
    var total=chair*chairWood+table*tableWood+bed*bedWood;
    return total;
}
console.log(woodCalculator(3,2,1));

