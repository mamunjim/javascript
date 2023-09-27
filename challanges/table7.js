// without function
for(i=1;i<=10;i++){
    console.log(7,"*",i,"=",7*i)
}

// with function

function table(number) {
    var tableRows = []; // Initialize an array to store the table rows

    for (var i = 1; i <= number; i++) {
        var row = number * i;
        tableRows.push(row); // Add each row to the tableRows array
    }

    return tableRows; // Return the entire table as an array
}

console.log(table(10)); // Call the function and log the result

