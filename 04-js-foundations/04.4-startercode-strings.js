//Concept: all strings are immutable
let cool_quote = "how YOU DO anyTHInG is How You dO eVERyThING"
//                01234
cool_quote[4] = "x"
// cool_quote = cool_quote + "!"
// i++ --> i+= 1 ===> i = i+1
cool_quote += "!";
// console.log(cool_quote)


// Strings have indices



// You can get length of a string
// console.log(cool_quote.length)



// You can loop through a string
// for(let i = 0; i<cool_quote.length; i++){
//   console.log(cool_quote[i])
// }



// lets create the sentence case function
function sentenceCase(inputString){
  let result = inputString[0].toUpperCase() //"W"
  // console.log(firstChar)
  for(let i = 1; i<inputString.length; i++){
    result += inputString[i].toLowerCase()
  }

  console.log(result)
}

// sentenceCase("waZZAAAP though?") //Wazzaaap though?

// the substring() method: Gives you a portion of a string
// console.log("what is good everybody?".substring(1))



// lets do sentence case function using the substring method!
function sentenceCase2(inputString){
  const result = inputString[0].toUpperCase() + inputString.substring(1).toLowerCase();
  return result;
}

// sentenceCase2("waZZAAAP though?") //Wazzaaap though?






// Splitting a string: Split string at each indicated character and put it into an array


const sentence = "Today was a good day. I learned a lot. Time to sleep."
// console.log(sentence.split("."))

// Joining elements from an array into a string using the indicated character
const names = ["Yi", "Nicco", "Alex", "Renato"]
// console.log(names.join(", "))

// Explain how titelize works in platform using split and join

// "the power of now" //The Power Of Now 
function titelize(inputString){
  const arrayOfWords = inputString.split(" ")
  const result = []
  for(let i = 0; i<arrayOfWords.length; i++){
    const word = sentenceCase2(arrayOfWords[i])
    result.push(word)
  }
  // console.log(result.join(" "))
  return result.join(" ");
}

// titelize("tHE powEr oF noW") //The Power Of Now

// Template literals

const firstName = "Drake"
const lastName = "AI"
const lyric = "Im way too good for you"
//Drake AI said this: Im way too good for you. And I felt that
// const result = firstName + " "+ lastName + " said this:" + lyric + ". And I felt that"
const result = `${firstName} ${lastName} said this: "${titelize(lyric)}". \nAnd I felt that.`
console.log(result)
// Escaping strings



// Study guide time!



const products = [
  {
    name: "macbook"
  },
  {
    name: "iphone"
  },
  {
    name: "mouse"
  }
]


for(let i = 0; i<products.length; i++){
  const currentProduct = products[i]
  console.log(currentProduct);
}