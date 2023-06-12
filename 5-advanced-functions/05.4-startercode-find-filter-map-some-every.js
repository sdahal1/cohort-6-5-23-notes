/* 
.find() -> loop through the array to find the first element that matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: FOUND ELEMENT OR UNDEFINED
  -CALLBACK FUNCTION DETAILS:
    - CB PARAMETERS: ELEMENT AND INDEX
    - CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .find() method will LOOP and return the FIRST ELEMENT that the condition evaluates true for or undefined if the condition is falsy for every element


.filter() -> loop through the array to create a new array with elements that match a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: NEW ARRAY WITH MATCHING ELEMENTS
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .filter() method will create a new array with elements that the condition evaluates true for.


.map() -> loop through the array to create a new array with transformed elements.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: NEW ARRAY WITH TRANSFORMED ELEMENTS
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A TRANSFORMATION - the callback function has to return a transformed value for each element. The .map() method will create a new array with the transformed elements.


.some() -> loop through the array to check if at least one element matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: BOOLEAN
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .some() method will return true if the condition evaluates true for at least one element or false if the condition is falsy for every element.


.every() -> loop through the array to check if every element matches a condition.
  -INPUT: CALLBACK FUNCTION
  -RETURNS: BOOLEAN
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ELEMENT AND INDEX
    -CB RULE: RETURN A CONDITION - the callback function has to return a condition. The .every() method will return true if the condition evaluates true for every element or false if the condition is falsy for at least one element.

*/

const employees = [
  {
    name: "Lebron James",
    salary: 110000,
    company: {
      name: "Google",
      city: "Reston",
      state: "Virginia",
    },
    languages: ["Javascript", "Java", "Python"],
  },
  {
    name: "Scooby Doo",
    salary: 200000,
    company: {
      name: "GreenChef",
      city: "New York City",
      state: "New York",
    },
    languages: ["Html", "Css"],
  },
  {
    name: "Larry David",
    salary: 80000,
    company: {
      name: "Comedy Central",
      city: "Los Angeles",
      state: "California",
    },
    languages: ["Javascript", "Java", "Python"],
  },
  {
    name: "Beyonce",
    salary: 90000,
    company: {
      name: "Google",
      city: "Brooklyn",
      state: "New York",
    },
    languages: ["Javascript", "Java", "Python"],
  }
];

//find an employee who is named "Larry David"
function findEmployeeByName(employees=[], name) {
  const result = employees.find((element,index)=>{
    return element.name === name
  })
  if(result === undefined) return null;
  return result;

  // return employees.find((element, index)=> element.name === name)
}

//one liner way
// const findEmployeeByName = (employees, name) =>  employees.find((element, index)=> element.name === name)

// console.log(findEmployeeByName(employees, "Scooby Doo"))

//get all the employees who are making over a given amount
function findHighEarners(employees, amount) {
  const result = employees.filter((element)=>{
    //return a condition that evaluates to a boolean
    return element.salary > amount
  })
  return result;
}

// console.log(findHighEarners(employees, 100000))

// let nums = [2,4,5,6,7]
// let result = nums.map((element)=>{
//   //return the transformation
//   if(element < 5){
//     return `hello, the lil' number is ${element}`
//   }else{
//     return `woah big time number of ${element}`
//   }
// })

// console.log(result)


//give back a new array containing only the company names and city for each employee in the given list formatted as "companyNameHere - cityHere"
function findCompanyNamesAndCity(employees) {
  const result = employees.map((element)=>{
    return `${element.company.name} - ${element.company.city}`
  })
  return result;
}

// console.log(findCompanyNamesAndCity(employees))

//use .some() to check if any employees are from a company with the name "Comedy Central"
function doesCompanyHaveEmployee(employees, companyName) {
  const result = employees.some((element)=>{
    return element.company.name === companyName
  })
  return result;
}

// console.log(doesCompanyHaveEmployee(employees, "Comedy Central"))

//use .every() to indicate whether every employee is making at least a certain salary
function areAllEmployeesGettingPaidGivenAmount(employees, amount) {
  const result = employees.every((element)=>{
    return element.salary >= amount
  })
  return result
}

// console.log(areAllEmployeesGettingPaidGivenAmount(employees, 100000))






/* ADVANCED: HOW TO COMBINE THESE METHODS FOR MORE COMPLEX PROBLEMS */

/* USE __filter__() AND _map___() TO GIVE BACK A NEW ARRAY CONTAINING ONLY THE COMPANY NAMES AND CITY FOR EACH EMPLOYEE IN THE GIVEN LIST WHO HAVE A SALARY GREATER THAN OR EQUAL TO A GIVEN AMOUNT


HINT: USE ._filter__() TO GET BACK ONLY THE EMPLOYEES WHO MAKE A GIVEN AMOUNT OR MORE, THEN USE ._map__ TO TRANSFORM THAT DATA TO A NEW ARRAY CONTAINING THE COMPANY NAMES AND CITY OF THOSE EMPLOYEES
*/

function highPayingCompanyNames(employees, amount){
  //first get the filtered result of employes making at least given amount
  const highEarners = employees.filter((element)=>{
    return element.salary >= amount
  })
  //then transform the filtered dataset to only get the names and city of the companies
  const result = highEarners.map((element)=>{
    const {company:{name,city}} = element;
    return `${name} - ${city}`
  })

  return result;
}


const highPayingCompanyNamesAdvanced = (employees, amount)=>employees.filter((element)=> element.salary >= amount).map(({company:{name,city}})=> `${name} - ${city}`)


// console.log(highPayingCompanyNamesAdvanced(employees, 100000))


/* USE ____() AND ____() METHOD TO FIND IF ANY EMPLOYEE FROM A GIVEN STATE HAS A SALARY OF OVER A GIVEN AMOUNT */

function isAnybodyFromGivenStateMakingOverGivenAmount(employees, stateName, amount){
  const result = employees.some((element)=>{
    return element.company.state === stateName && element.salary > amount
  })

  return result
}


console.log(isAnybodyFromGivenStateMakingOverGivenAmount(employees, "New York", 100000))
