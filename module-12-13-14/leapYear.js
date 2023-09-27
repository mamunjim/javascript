var y=2200;
if(y%400==0){
    console.log(y+" is leap year");
}
else if(y%4==0 && y%100!=0){
    console.log(y+" is leap year");
}
else{
    console.log(y+ " is not leap year");
}







function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // It's a leap year
        
    } 
    
    else {
        return false; // It's not a leap year
    }
}

// Test cases
console.log(isLeapYear(2000)); // true (leap year)
console.log(isLeapYear(2020)); // true (leap year)
console.log(isLeapYear(2024)); // true (leap year)
console.log(isLeapYear(1900)); // false (not a leap year)
console.log(isLeapYear(2022)); // true (leap year)
