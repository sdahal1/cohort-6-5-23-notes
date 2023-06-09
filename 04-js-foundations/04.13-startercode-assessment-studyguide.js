/*


Input: Teams array containing team objects


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  }
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  }
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

Write a function that returns a team that matches the given city and player

1. Should return null if a team cannot be found by city
2. Should return null if a team cannot be found by player
3. Should return the team if its matching a city and contains the given player

*/

let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  },
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3
  },
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

function findTeamByCityAndPlayer(teams=[], city, player) {
  //access each element (team object) in teams array. For each element do:
  for(let i = 0; i<teams.length; i++){
    const team = teams[i];
    //look at the current element's city property and check IF it is equal to the input city (parameter city). 
    if(team.city === city && team.players.includes(player)){
      //If they match, look at the current elemen's players property, and check if the array contains given player's name. If so, return the element
      return team;
    }
  }
  
  //if we are done with for loop, then reutrn null
  return null
}

// console.log(findTeamByCityAndPlayer(teams, "Los Angeles", "Kareem"))


/*
Input: Team will be an object, cities will be an object


// Team object
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


Cities Object
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


Add a city from a given team to a given collection of cities and update the cities collection objects info

1. If called with only a team and no cities object, then use an empty object
2. If the given team's city is not in the cities object yet, then create a new key in the cities object with the given team's city and give it keys for numberOfPlayers, numberOfChampionships, and teams 
3. If the cities object already has a city that matches the given team, then update the cities object at that city key to update the number of players, number of championships and add to that cities teams array the given team

*/

let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}

let newTeam2 = {
  name: "Magic",
  city: "Orlando",
  players: ["Dwight"],
  championships: 0
}

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


function addCityToCities(team, cities={}) {
  //look at the team's city -> teamCity
  const {name, city, players, championships} = team;
  //check if cities object contains a key that matches the teamCity.
  //if the cities objects has that key, then:
  if(cities[city] !== undefined){
    const foundCity = cities[city]
    //get number of players in new team -> team.players.length() and add it to totalNumberOfPlayers at that city Key. 
    foundCity.totalNumberOfPlayers += players.length;
    // add the total number of championships to the numberOfChamiopnships property
    foundCity.numberOfChampionships += championships;
    // push the name of the new team to the teams array
    foundCity.teams.push(name)
  }else{
    //create a new key in the cities object with the name of the new teams city
    cities[city] = {
      totalNumberOfPlayers: players.length,
      numberOfChampionships: championships,
      teams: [name]
    }
  }

  return cities
}


// console.log(addCityToCities(newTeam, cities_usa))
// console.log(addCityToCities(newTeam2, cities_usa))




function calculateTotalChampionships(cities={}) {
  let total = 0;
  for(let cityNameKey in cities){
    const {numberOfChampionships} = cities[cityNameKey]
    // console.log("value is this", cities[cityNameKey]) //cities['los angeles']
    total += numberOfChampionships
  }
  return total;
}


// console.log(calculateTotalChampionships(cities_usa))



// const person = {
//   name: "Rob",
//   address: {
//     street: "100 way",
//     state: "CA"
//   }
// }
// const x = "address"
// console.log(person[x])
/*

1. Should return null if the cities is empty
2. Should return a summary of all the cities in the cities object
3. Example input:

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

//Example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo(cities={}) {
	//check if the object is empty, if it is, return null


  let result = "";
  for(let key in cities){
    // //log the key 
    // console.log(key)
    // //log the value at each key
    // console.log(cities[key])
    const value = cities[key]
    result += `${key} has ${value.numberOfChampionships} championships and the following teams: ${value.teams.join(", ")}\n`
  }
  const total = calculateTotalChampionships(cities)
  result += `Total Championships: ${total}`

  return result;
}


console.log(printInfo(cities_usa))