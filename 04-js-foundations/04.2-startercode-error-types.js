let topArtists = [
  {name: "Drake", rating: 10}, //0
  {name: "Taylor Swift", rating: 10}, //1
  {name: "J Cole", rating: 10}, //2
  {name: "Kendrick Lamar", rating: 9}, //3
  {name: "Beatles", rating: 10} //4
]

let topRappers = [
  {name: "Drake", rating: 10},
  {name: "Ice JJ Fish", rating: 9},
  {name: "21 savage", rating: 9}
]


//Elements = the things in the array
//Index = the position of the elements in the array (starts at index 0 at the first element)


function getRandomArtist(artists) { //artists is the parameter - variable that stores whatever is passed to the function
  console.log("getting a random artist for you...");
  let randomNum = Math.floor(Math.random()*artists.length)
  let randomArtist = artists[randomNum];
  return randomArtist
}



console.log(getRandomArtist(topArtists)) //argument - the data you pass in to a function
console.log(getRandomArtist(topRappers))

// console.log(getRandomArtist(topArtists))


/* 
- Show examples of different error types using the starter code for 04.2-startercode
  - Reference error
    - Example of variable not defined
    - Example of variable out of scope
    - Example of calling the wrong function name
  - Syntax error
    - Misspelling, braces incomplete
  - Type error
    - Using something the wrong way (array.length vs length())




*/
