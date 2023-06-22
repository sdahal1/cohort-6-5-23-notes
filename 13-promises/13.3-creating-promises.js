// PROMISES ALLOW US TO MAKE SYNC CODE TO COME AFTER ASYNC CODE
  // WHY WOULD WE DO THIS? SOMETIMES, YOU WILL HAVE SOME SYNC CODE THAT RELIES ON DATA GATHERED FROM ASYNC CODE

//WE WILL LOOK AT EXAMPLES FROM THE LEARNING PLATFORM FIRST

const fs = require("fs"); //fs === file system - allows us to read from fi

/* 
//Basic structure of a promsie

const promise = new Promise((resolve, reject)=>{
  //put async code that we want to be able to wait for in here
})

*/

function findRandomQuote(fileName){
  let quote = null; //sync
  console.log("Finding a quote..."); //sync
  return new Promise((resolve, reject)=>{
    fs.readFile(fileName, (error, buffer) => { //async
      if (error) {
        // throw error;
        return reject(error)
      }
      // console.log(buffer.toString().split("\n"))
      const lines = buffer.toString().split("\n");
      quote = lines[Math.floor(Math.random() * lines.length)];
      return resolve(quote);
    });
  })
}

//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS
const randomQuote = findRandomQuote("quotes.txt");


console.log(randomQuote)


//resolving a promise by waiting for it using a set time amount
// setTimeout(()=>{
//   console.log("sandwich ahrm the quote is ready....", randomQuote)
// },500)

randomQuote.then((resolvedValue)=>{
  //once the async process is complete and has resolved our data (sandwich is ready)
  console.log("resolved value is this", resolvedValue)
})

console.log("text a friend")
console.log("load up other things in the site")



//You can also do it without a variable:
// findRandomQuote("quotes.txt")
//   .then((resolvedValue)=>{
//     //once the async process is complete and has resolved our data (sandwich is ready)
//     console.log("resolved value is this", resolvedValue)
//   })


