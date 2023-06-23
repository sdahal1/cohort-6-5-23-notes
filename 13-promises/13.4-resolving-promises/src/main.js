const { welcome, goodbye, tell } = require("../utils/fortune-teller");


// let myString = "The result is: " //sync 
// welcome() //async
//   .then((welcomeMessage)=>{
//     myString += welcomeMessage
//     // console.log(welcomeMessage)
//   })
//   // .then(console.log)

// console.log(myString) //sync

function chatHistory(question){
  const history = [];
  return welcome()
    .then((welcomeMsg)=>{
      history.push(welcomeMsg)
      history.push(question)
      return tell(question)
    })
    .then((fortuneMsg)=>{
      history.push(fortuneMsg)
      return goodbye()
    })
    .then((goodbyeMsg)=>{
      history.push(goodbyeMsg)
      // console.log(history)
      return history;
    })
}

// console.log(chatHistory("should i bake cookies?"))

// chatHistory("Will sprite berry remix ever come back");
// chatHistory();


function example(){
  return welcome()
    .then((welcomeMsg)=>{
      return "hello"
    })
    // .then((a)=>{
    //   console.log(a);
    //   // return 7
    // })
    // .then((b)=>{
    //   console.log(b)
    //   return tell()
    // })
    // .then((fortuneMsg)=>{
    //   console.log('fortunemsg is', fortuneMsg)
    // })
    // .catch((rejectedMsg)=>{
    //   console.log(rejectedMsg)
    // })
}

welcome()
    .then((welcomeMsg)=>{
      return "hello"
    })
  .then((word)=>{
    console.log(word)
  })
  



