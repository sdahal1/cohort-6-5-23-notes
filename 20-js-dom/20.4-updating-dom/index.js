

function shortenDescriptions(){
  //select all descriptions
  const allDescriptions = document.querySelectorAll(".description-display");
  
  // console.log(allDescriptions)
  allDescriptions.forEach((descriptionDiv,idx)=>{
    // descriptionDiv.innerText = "wazzaa"
    if(descriptionDiv.innerText.length > 250){
      descriptionDiv.innerText = descriptionDiv.innerText.slice(0,250)
      descriptionDiv.innerHTML += "<a href='#'>...</a>";
    }
  })
}


shortenDescriptions()

function styleHighRatings(){
  //select all ratings
  const allRatings = document.querySelectorAll(".rating-display .value");
  for (let ratingDiv of allRatings){
    //if the rating value is greater than 4.7, then we will change the style to have yellow background color
    if(Number(ratingDiv.innerText) > 4.7){
      //HOW TO CHANGE STYLE USING THE STYLE ATTRIBUTE
      // ratingDiv.style.border = "3px solid red";
      // ratingDiv.style.backgroundColor = "yellow";
      // ratingDiv.style.borderRadius = "50%"
      // ratingDiv.style.fontWeight = "bold"

      //HOW TO CHANGE STYLE BY ADDING AND REMOVING CLASSES
      ratingDiv.classList.add("swag");
      ratingDiv.classList.remove("value")

      //HOW TO CHANGE STYLE BY UPDATING ID
      ratingDiv.id = "noSwag"
    }
  }
}

styleHighRatings()


function createNewElement(){
  //figure out how many parks are on the page. first select all the parks and get the length
  const allParks = document.querySelectorAll(".park-display");
  const numParks = allParks.length

  //then create an h2 element that says "You are look at X parks"
  const h2Element = document.createElement("h2");
  //give the h2 element some content
  h2Element.innerText = `You are looking at ${numParks} parks`;
  h2Element.classList.add("subHeading")
  // console.log(h2Element)

  //insert the h2 element onto the "DOM" (the page) in the header. To do this, figure out which element will be the parent and select the parent first.
  // const header = document.querySelector("header")
  const header = document.querySelector(".banner")

  //have the parent append the newlly created element as a child
  header.appendChild(h2Element)


}


function removeElement(){
  //select the element you want to remove
  const firstPark = document.querySelector(".park-display");
  //select the parent of the element you want to remove
  const main = document.querySelector("main");

  //parentElementHere.removeChild(elementToRemoveHere)
  main.removeChild(firstPark)
}

setTimeout(()=>{
  removeElement()
},3000)
createNewElement()