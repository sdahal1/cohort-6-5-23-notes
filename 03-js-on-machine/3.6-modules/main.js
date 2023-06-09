//import === require()
// const findPlantById = require("./functions")
const {findPlantById,sayHi} = require("./src/functions")

let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

console.log(findPlantById(plants, 2))
console.log(sayHi("Renato"))