// var -> don't use it anymore
// var x = "x gon giv it to ya - dmx"



// declare variables using 'let' and 'const'

// const is only for variables you don't want to be able to reassign
const studentAFirstName = "Omar";


// studentAFirstName = "Omeezythadon"



// using const with arrays (push, pop, update at an index)
const favAppetizers = ["Clamari", "Onion Rings", "Fries", "Pigs in a blanket", "Chicken Wings"]
//                        0            1           2            3                  4


favAppetizers.push("Fried Pickles")
favAppetizers.pop()
favAppetizers[2] = "Old Bay Fries";

// console.log(favAppetizers)

const author = {
  name: "Stephen King",
  books: ["The Shining", "It"],
  birthyear: 1960
}

author.name = "Stephen King the Don"
author.books.push("Salem's Lot")
author.hairColor = "Brown"
// console.log(author)
// using const with objects ()


//Use let for variables that CAN be reassigned


// Using let in for loops
for(let i = 0; i<favAppetizers.length; i++){
  console.log("Found a food item", favAppetizers[i])
}

/* 
MAIN TAKEAWAYS:

1. Use const primarily; this will be your go-to. Moving forward, you'll want to declare most of your variables using const.

2. Use let if you need to reassign a value. This is a common requirement during for loops and sometimes with if statements.

3. Don't use var unless necessary, like when working in a codebase that uses it. However, that will likely only happen in the distant future. As mentioned above, there are other reasons to use (and to not use) var, but those will be covered in a different lesson. For now, just avoid it.

*/



