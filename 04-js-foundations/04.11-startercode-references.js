/* 
PRIMITIVE DATA TYPES- PASSED BY VALUE:
String = "bron bron"
Number = 23
Boolean = true
Undefined = undefined
Null = null



REFERENCE DATA TYPES- PASSED BY REFERENCE:
Arrays
Objects




*/


// WHEN A PRIMITIVE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE GETS ITS OWN COPY
let num1 = 5;
let num2 = num1; //num2 is also set to 5,

//BUT NUM2 AND NUM1 ARE SEPARATE COPIES. SO AFFECTING NUM2 WILL NOT AFFECT NUM1
num1++
// console.log(num1, num2)

let name1 = "Rob"
let name2 = name1;

name1+="The Instructor"
// console.log(name1, name2)
// WHEN A REFERENCE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE JUST POINTS TO THAT DATA IN MEMORY (IT REFERENCES THAT DATA RATHER THAN MAKING A SEPARATE COPY)

const names = ["Mohammad", "Nicco", "Jacky", "Omar"]
const names2 = names
const names3 = [...names2] //this is how you make a separate copy of a reference type-> use the spread operator

names.push("Joseph")
// console.log(names, names2, names3)

// LETS SEE WHAT HAPPENS IN FUNCTIONS WITH PRIMITIVE TYPES AND REFERNCE TYPES
const x = [1,2,3,4] //reference type

function addToend(arr){
  arr.push(5)
}

addToend(x);
console.log(x)