// FUNCTION DECLARATION

// ratingAsText({rating: 4, name: "Hershey"})

function ratingAsText(park={}) {
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
}


// FUNCTION EXPRESSION- VARIABLE EQUALS TO A FUNCTION
const ratingAsText2 = function(park={}){
  console.log("This is a function expression.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText2({rating: 5, name: "Grand Canyon Park"}))

// ARROW FUNCTION EXPRESSION-HOW DO WE CONVERT TO ARROW?
  // ARROW REPLACES FUNCTION KEYWORD
  // () CONTAINS THE PARAMETERS FOR THE FUNCTION
  // NO () REQUIRED IF ONLY ONE PARAMETER


const ratingAsText3 = (park={})=>{
  console.log("This is an arrow function.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText3({rating: 5, name: "Grand Canyon Park"}))

// IMPLICIT RETURN- WHEN THE ONLY LINE OF CODE INSIDE THE FUNCTION BODY IS A RETURN STATEMENT (you can get rid of the word "return" and the)

// const ratingAsText4 = (park={})=> {
//   return park.rating > 4 ? "Excellent!" : "Good";
// }

const ratingAsText4 = (park={})=> park.rating > 4 ? "Excellent!" : "Good";

// console.log(ratingAsText4({rating: 5, name: "Grand Canyon Park"}))




// POP QUIZ: CONVERT THESE TO ARROW FUNCTION
const getLocationCoordinates = ({ geo: { lat, lon } }, zoom = 10) =>  `https://www.google.com/maps/@${lat},${lon},${zoom}z`;



const calculateCylinderVolume = (radius, height) => {
  console.log('hi')
  return Math.PI * radius ** 2 * height;
};