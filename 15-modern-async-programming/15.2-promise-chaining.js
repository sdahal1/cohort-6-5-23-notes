const axios = require("axios");
const BASE_URL = "http://localhost:5000";

const player = {
  name: "Lebron James",
  team: "Lakers",
  number_championships: 4,
  state: "California"
}

// PROBLEM: WE NEED TO CHECK IF A PLAYER BY A GIVEN NAME EXISTS, IF THEY DO NOT, THEN WE WILL CREATE A PLAYER BY THAT NAME
function createIfNotExists(body){

}

function updateIfExists(id, body) {
  
}

// updateIfExists(1, newData)