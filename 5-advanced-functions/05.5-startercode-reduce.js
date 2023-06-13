/* 
.reduce() -> loop through the array and accumulate a value based on a condition.
  -INPUT: CALLBACK FUNCTION, INITIAL VALUE
  -RETURNS: ACCUMULATED VALUE
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ACCUMULATOR, ELEMENT AND INDEX
    -CB RULE: RETURN AN ACCUMULATION - the callback function has to return a value that will be accumulated with the previous values on each iteration.
*/





const numbers = [768, 1004.2, 433.1];

function sumNumsForEachWay(nums){
  //initialize a counter/accumulator
  let total = 0;
  nums.forEach((element,index)=>{
    total+= element
  })

  return total;
}

// console.log(sumNumsForEachWay(numbers))

function sumNums(nums){
  const total = nums.reduce((accumulator, element, index)=>{
    accumulator += element;
    return accumulator
  },0)

  return total
}

/* 
total = 
accumulator = 0-> 768 -> 1772 -> 2200


*/
// console.log(sumNums(numbers))


const movies = [
  {
      title: "Austin Powers",
      views: 1000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
  {
      title: "Finding Nemo",
      views: 2000,
      producer: { 
          name: "Disney",
          city: "Orlando"
      }
  },
  {
      title: "Forrest Gump",
      views: 3000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
];


/* ADD UP ALL THE VIEWS FROM ALL THE MOVIE OBJECTS IN THE MOVIES ARRAY */

function totalViews(movies){
  const total = movies.reduce((accumulator,element,index)=>{
    accumulator += element.views;
    return accumulator;

    // you can also just return like this
    // return accumulator + element.views 
  },0)
  return total
}

// console.log(totalViews(movies))


//HOW TO ACCUMULATE STRINGS
const words = ["Hi", "Bye", "Huh", "Who dis", "new Phone", "oh aiight"] //"Hi Bye Huh Who dis new Phone oh aiight"

function accumulateString(arr){
  const result = arr.reduce((accumulator, element)=>{
    accumulator += `${element} `
    return accumulator
  },"")

  return result;
}
// console.log(accumulateString(words))

/* HOW TO ACCUMULATE ONTO OBJECTS- GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS A MOVIE TITLE, AND THE VALUE IS THE PRODUCER NAME 
EXAMPLE OUTPUT:

{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}

accumulator = {
  "Austin Powers": "Universal Studios"
}
*/

function movieAndProducerName(movies){
  const result = movies.reduce((accumulator, element)=>{
    //create a new key in the accumulator reperesenting the current elements title, and the value being the current element's producer's name
    accumulator[element.title] = element.producer.name;
    return accumulator
  },{}) 
  return result
}


// console.log(movieAndProducerName(movies));

/* ADVANCED PROBLEM- HINT FOR YOUR ASSESSMENT:  GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS THE PRODUCER NAME, AND EACH VALUE IS AN ARRAY OF MOVIES ASSOCIATED WITH THAT PRODUCER NAME 

EXAMPLE OUTPUT: 

{
  'Universal Studios': [
      { title: 'Austin Powers', views: 1000, producer: [Object] },
      { title: 'Forrest Gump', views: 3000, producer: [Object] }
    ],
  Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}


accumulator = {
  "Universal Studios": [{US Element}, {forrest gump element}],
  "disney": [{disney element}],

}

*/

function movieByProducer(movies){
  const result = movies.reduce((accumulator, element)=>{
    if(accumulator[element.producer.name] === undefined){ //if the key doesnt exist, then create a key and set value to be array containing current element
      accumulator[element.producer.name] = [element]
    }else{
      accumulator[element.producer.name].push(element)
    }
    return accumulator
  },{})

  return result;
}

// console.log(movieByProducer(movies))