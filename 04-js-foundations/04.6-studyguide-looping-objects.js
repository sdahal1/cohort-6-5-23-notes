const tournament1 = {
  "game 1": { homeTeam: 100, awayTeam: 85 },
  "game 2": { homeTeam: 98, awayTeam: 100 },
  "game 3": { homeTeam: 50, awayTeam: 51 },
  "game 4": { homeTeam: 10, awayTeam: 8 },
};


// console.log(tournament1['game 1']['awayTeam'])

// Input
// Your input for both functions will be a tournament object

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament and return a total number of points scored from all teams in all games
function calculateTotalPoints(tournament){
  let total = 0;
 
  for(let key in tournament){
    const gameObj = tournament[key]
    total += gameObj.homeTeam + gameObj.awayTeam
  }
  return total
}

// console.log(calculateTotalPoints(tournament1));



// printGameSummarys
// The printGameSummarys function will take in the tournament object of nested game objects and return a string, joined by \n, of the game results for each game

// For example:

//printGameSummarys(tournament1); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"

function printGameSummarys(tournament){
  let result = ""
  for(let key in tournament){
    // console.log(key)
    const gameObj = tournament[key]
    let resultWord;
    if(gameObj.homeTeam > gameObj.awayTeam){
      resultWord = "beat"
    }else{
      resultWord = "lost to"
    }
    // console.log(`${key}: Home team ${resultWord} the away team ${gameObj.homeTeam}-${gameObj.awayTeam}`)
    result += `${key}: Home team ${resultWord} the away team ${gameObj.homeTeam}-${gameObj.awayTeam}\n`
  }

  return result;
}

console.log(printGameSummarys(tournament1))