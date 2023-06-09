const moment = require('moment'); // require
const faker = require('faker');

console.log("The current time is ", moment().format("MMMM Do YYYY, h:mm:ss"))
for(let i = 0; i< 10; i++){
  console.log(i)
}


function generateTeam(){
  return {
    name: faker.company.catchPhraseNoun(),
    city: faker.address.city(),
    color1: faker.commerce.color(),
    color2: faker.commerce.color()
  }
}

// console.log(generateTeam())