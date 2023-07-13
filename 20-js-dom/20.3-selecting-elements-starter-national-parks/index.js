//SANITY CHECK
// console.log("sanity check")
/*
NOTES:
- document.querySelector() --> to select the first element on the page that matches the query (gives back one element as an object)
- document.querySelectorAll() --> to select all elements on the page that matches the query (returns back a NodeList (similar to array) that contains the elements that match the query)

*/

// 1. Select the first h1 selector
const firstH1 = document.querySelector("h1");
// console.log(firstH1.innerText)

// 2. Select all h1 selectors
const allH1s = document.querySelectorAll("h1");
// console.log(allH1s)
// 3. Select the first section with the class of park-display
const firstParkDisplay = document.querySelector(".park-display")
// console.log(firstParkDisplay)

// 4. Select the first established date value
const firstEstablishedDate = document.querySelector(".value")
// console.log(firstEstablishedDate)

// 4.1. Select the first area in acres on the page
const firstAreaAcres = document.querySelector(".area-display .value")
// console.log(firstAreaAcres)

// 5. Select all the established date values
const allDates = document.querySelectorAll(".established-display .value")
// console.log(allDates)
// 6. Select all the area values
const allAreas = document.querySelectorAll(".area-display .value");
// console.log(allAreas)
// 7. Write a statement that will find the Grand Canyon national park element by its ID.
const grandCanyonSection = document.querySelector("#gcnp")
// console.log(grandCanyonSection)
// 8. Write a statement that will find the element containing the established date for the Grand Canyon national park.
const grandCanyonDate = document.querySelector("#gcnp .established-display .value")

console.log(grandCanyonDate)


// grandCanyonDate.addEventListener("click", (event)=>{
//   grandCanyonDate.style.backgroundColor = "yellow"
// })



