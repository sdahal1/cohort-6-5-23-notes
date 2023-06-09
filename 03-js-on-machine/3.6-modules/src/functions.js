function findPlantById(plants, id) {
  let result = null;
  for (let i = 0; i < plants.length; i++) {
    let plant = plants[i];
    if (plant.id === id) {
      result = plant;
    }
  }
  return result;
}


function sayHi(name){
  return `Wazzaaaap ${name}`
}




//exporting allows other files to access the contents that are exported from this file
// module.exports = findPlantById

//exporting multiple functions? then put it in an object
module.exports = {
  findPlantById,
  sayHi
}



