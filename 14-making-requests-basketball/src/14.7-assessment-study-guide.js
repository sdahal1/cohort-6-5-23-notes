const axios = require("axios");
const BASE_URL = "http://localhost:5000";



//GET ALL PLAYERS
function findAllPlayers(){
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      console.log(response.data)
      return response.data;
    })
    .catch((err)=>{
      console.log(err.message)
      return err.message;
    })
}

// findAllPlayers()

//GET ONE PLAYER BY ID
function findPlayerById(id){
  return axios.get(`${BASE_URL}/players/${id}`)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
    return err.message;
  })
}
// findPlayerById(4)


//CREATE A NEW PLAYER
function createPlayer(info){
  return axios.post(`${BASE_URL}/players`,info)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
    return err.message;
  })
} 

// createPlayer({
//   name: "Alex",
//   team: "Toon Squad",
//   number_championships: 5,
//   state: "Texas"
// })

//UPDATE PLAYER BY ID
function updatePlayer(id,body){
  return axios.put(`${BASE_URL}/players/${id}`,body)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
    return err.message;
  })
}

// updatePlayer(1, {
//   "name": "GOAT James",
//   "team": "Lakers",
//   "number_championships": 4,
//   "state": "California"
// })

//DELETE PLAYER BY ID
function deletePlayer(id){
  return axios.delete(`${BASE_URL}/players/${id}`)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
    return err.message;
  })
}


// deletePlayer(3)