var student1 ={name:"mamun", roll:10, class:"honours" };
var student2 ={name:"shorna", roll:2, class:"honours" };
var student3 ={name:"mizan", roll:3, class:"honours" };

// sobgulo property show koranor jonno

console.log(student1);
console.log(student2);
console.log(student3);

// object er specific property show koranor jonno

console.log(student1.name);
console.log(student2["roll"]);


// property er man poriborton korar jonno

student1.roll=5;
student2.name="anik";
student3["class"]="masters";

console.log(student1.roll);
console.log(student2["name"]);
console.log(student3.class);



// notun property add korar jonno
student1.phone=15454;
console.log(student1);

student2.bloodGroup="A positive";
console.log(student2);
