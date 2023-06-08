//GLOBAL VARIABLE
const dish1 = {
  name: "Calamari",
  price: 12,
  ingredients: ["squid", "breadding", "oil", "basil"]
}


//GLOBAL FUNCTION
function makeMeHungry(){
  console.log(`MMMMM you finna eat some ${dish1.name}`)
  const restaurant = "Thai Kitchen"
}


makeMeHungry()
// console.log(restaurant)

//FUNCTIONS CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A FUNCTION IS ONLY VISIBLE WITHIN THAT FUNCTION

//LOOPS AND CONDITIONALS (BLOCKS) CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A BLOCK IS ONLY VISIBLE WITHIN THAT BLOCK

for(let i = 0; i<5; i++){
  console.log(i)
  const double = i*2
  console.log(double)
}

if(1+1===2){
  const result = "yay"
}

console.log(result)