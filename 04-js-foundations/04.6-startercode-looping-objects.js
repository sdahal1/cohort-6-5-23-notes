const player = {
  firstName: "Lebron",
  "last name": "James",
  age: 38,
  awards: ["MVP", "Finals MVP", "Points leader of all time", "GOAT"],
  team: {
    name: "Lakers",
    city: "Los Angeles",
    salary: 38000000
  }
}

// - OBJECTS HAVE KEY VALUE PAIRS (KEYS ARE ALSO PROPERTIES)

// - KEYS NEED TO BE IN STRINGS IF THEY HAVE A SPACE OR '-' IN IT


// - ACCESSING VALUES IN AN OBJECT USING A KEY NAME
// console.log(player.age) //dot notation
// console.log(player['last name']) //bracket notation

// console.log(player['age']) //bracket notation
// const x = "firstName"
// console.log(player[x])
// console.log(player.team.city)
// console.log(player['team']['city'])
// const a = "team"
// const b = "city"
// console.log(player[a][b])
// console.log(player.hometown)


// - DOT NOTATION VS BRACKET NOTATION TO ADD THE FOLLOWING KEYS: 'NUMBEROFCHAMPIONSHIPS', 'HOMETOWN':

// player.numberOfChampionships = 4;
// player['numberOfChampionships'] = 4;



// - DOT NOTATION VS BRACKET NOTATION TO UPDATE AN EXISTING KEY VALUE PAIR

// player.firstName = "Bron Bron"
// player['firstName'] = "Bron Bron"

// console.log(player)



// - VARIABLES GO IN BRACKET NOTATION


// - LITERAL PROPERTY NAMES GO IN DOT NOTATION OR BRACKET NOTATION WITH QUOTES



// - FOR IN LOOP TO LOOP OVER OBJECTS
// for(let key in player){
//   console.log(key) //log the key
//   const value = player[key]
//   console.log(value) //log the values
// }


// - OBJECT.KEYS() AND OBJECT.VALUES() GIVE US BACK ARRAYS THAT WE CAN LOOP THROUGH KEYS AND VALUES WITH

const playerkeys = Object.keys(player) //[ 'firstName', 'last name', 'age', 'awards', 'team' ]
const teamkeys = Object.keys(player.team)

// console.log(playerkeys)
// console.log(teamkeys)

const playerValues = Object.values(player)
// console.log(playerValues)


// - FOR OF LOOP TO LOOP OVER ARRAYS

for(let element of playerkeys){
  console.log(element)
  console.log(player[element])
}



