const authors = [
  {
    id: 1,
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    series: ["His Dark Materials", "Sally Lockhart"],
  },
  {
    id: 2,
    name: {
      firstName: "Terry",
      lastName: "Pratchett",
    },
    series: ["Discworld", "Long Earth"],
  },
];


/* 
1. DONT REPEAT YOURSELF: THE ABOVE FUNCTION WORKS, HOWEVER WE CAN REFACTOR THE "authors[i]" TO BE MORE READABLE BY ASSIGNING IT TO A VARIABLE:
*/
function getAllSeries(authors) {
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i]
    for (let j = 0; j < author.series.length; j++) {
      result.push(author.series[j]);
    }
  }
  return result;
}

// console.log(getAllSeries(authors)); // [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]







/* 
2. RETURN EARLY- GUARD CLAUSE (WHAT IS IT AND WHEN TO USE IT?)
*/

function getSeriesListById(authors=[], id=0) {
  if(!id || id===0) return "No ID Provided" //guard clause-> 


  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }

  if(selected === null) return []

  const message = `Series list: ${selected.series.join(", ")}`;
  return message;

}

// console.log(getSeriesListById(authors, 1))




/* 
3. AVOID BOOLEAN RETURNS: WE CAN AVOID EXPLICITLY RETURNING TRUE OR FALSE BASED ON A CONDITION BY JUST RETURNING THE EXPRESSION/CONDITION THAT EVALUATES TO TRUE/FALSE:
*/

function moreThanThreeAuthors(authors) {

  return authors.length > 3
}



console.log(moreThanThreeAuthors(authors))