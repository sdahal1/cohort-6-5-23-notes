//get the average rating of all the artists form the given array
function getAverageRating(artists = []) {
    if(!artists.length)return null;
    let sum = artists.reduce((sum, artistObj) => {
        sum += artistObj.rating;
        return sum;
    }, 0);
    let average = sum / artists.length;
    return Number(average.toFixed(2))
}

// console.log(getAverageRating(artists));

// get all the artists who are rated lower than a given number
function getLowRatedArtists(artists = [], rating) {
    if(!artists.length)return null;

    return artists.filter((artist) => {
        return artist.rating <= rating;
    });
}

function findArtistByName(artists=[],name=""){
    const result =  artists.find((artistObj)=>{
        return artistObj.name === name;
    })

    if(result === undefined) return null;
    return result
}

function partitionArtistsByRating(artists=[], rating){
    const lowRated = artists.filter((artistObj)=>{
        return artistObj.rating <= rating
    })

    const highRated = artists.filter((artistObj)=>{
        return artistObj.rating > rating
    })

    return [lowRated,highRated]
}


function assignGrade(score) {
    let result = "F"; //y
  
    if (score > 0.9) { //y
      result = "A"; //NO
    } else if (score > 0.8) { //y
      result = "B"; //y
    } else if (score > 0.7) { //NO
      result = "C"; //NO
    }
  
    return result;//y
  }

// console.log(getLowRatedArtists(artists, 7));

module.exports = { getLowRatedArtists, getAverageRating, findArtistByName, partitionArtistsByRating, assignGrade };
