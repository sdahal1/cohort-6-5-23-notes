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
  //check if the data has someone with the name of the given player first
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      const foundPlayer = response.data.find((playerObj)=>{
        return playerObj.name === body.name
      })
      console.log(foundPlayer)
      if(foundPlayer){
        throw `Player by the name of ${body.name} already exists. Try another player`;
      }
      return axios.post(`${BASE_URL}/players`,body)
    })
    .then((response)=>{
      return response.data
    })
    .catch((err)=>{
      console.log(err)
      return err;
    })
}

// createIfNotExists(player)

function updateIfExists(id, body) {
  
}

// updateIfExists(1, newData)