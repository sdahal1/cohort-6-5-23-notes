const dishes = ["Calamari", "Pasta", "Lasagna", "Garlic Bread", "Salad", "Pizza"]
// 1. GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING REGULAR FOR LOOP
// for(let i = 0; i<dishes.length; i++){
//   console.log(dishes[i])
// }

// for(let element of dishes){ //for in ->
//   console.log(element)
// }

// 1.1 GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING .FOREACH()



// dishes.forEach(function logIt(element){
//   console.log("element is this", element)
// })

//firstWord === each element
//secondWord === each indexNumber

// dishes.forEach((element,idx)=>{
//   console.log(element, idx)
// })

// 2. USE FOREACH() TO LOOP THROUGH AN ARRAY OF OBJECTS AND SHOW THEIR DETAILS: "The rapper Drake earned 10000000 from rapping career with a fire level of 10."

const rappers = [
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "5",
    moneyEarnedFromRapping: 0
  }
];

function giveRapperSummary(rappers=[]){
  rappers.forEach((element, idx)=>{
    console.log(`The rapper ${element.name} earned ${element.moneyEarnedFromRapping} from rapping career with a fire level of ${element.fireLevel}.`)
  })
}

function giveRapperSummaryAdvanced(rappers=[]){
  rappers.forEach(({name, moneyEarnedFromRapping,fireLevel}, idx)=>{
    console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
  })
}

// console.log(giveRapperSummaryAdvanced(rappers))




/* 
GENERAL RULES OF .FOREACH()

.forEach() -> accepts a CALLBACK FUNCTION as its agrument. It will apply the callback function to each element in the array. 

-The first parameter in the CB represents current element in the loop
-The second parameter in the CB represents index number of current element

*/


// 3. USE FOREACH TO ADD UP THE FIRELEVELS OF THE ARTISTS ABOVE AND GIVE BACK THE TOTALFIRE AND AVERAGEFIRE
function showStats(rappers=[]){
  let totalFire = 0;
  rappers.forEach((element,idx)=>{
    totalFire += Number(element.fireLevel)
  })
  console.log(totalFire)
  console.log(totalFire/rappers.length)
}

// console.log(showStats(rappers))


// 4. USE FOREACH TO BUILD A STATEMENT FROM GIVEN DATA ABOVE "MY TOP RAPPERS LIST ARE: DRAKE, LUPE FIASCO, ROB D, AND THEY ARE ALL FUEGO.
function buildSentence(rappers=[]){
  let result = "My top rappers list are: "
  rappers.forEach((element)=>{
    result += `${element.name}, `
  })
  result += "and they are all fuego."
  return result;
}

console.log(buildSentence(rappers))
// 5. USE FOREACH TO LOG THE MONEYEARNEDFROMRAPPING FOR EACH ARTIST ABOVE AND FORMAT USING THE DOLLAR SIGN TO SHOW AMOUNT IN DOLLARS







