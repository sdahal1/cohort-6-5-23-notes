//import the function we want to test here
const {getLowRatedArtists,getAverageRating,findArtistByName, partitionArtistsByRating, assignGrade} = require("../src/main")


const artists = [
  { name: "Taylor Swift", rating: 9 },
  { name: "Drake", rating: 9.8 },
  { name: "J Cole", rating: 8 },
  { name: "Rob", rating: 6.25 },
  { name: "Kendrick Lamar", rating: 8.5 },
  { name: "Beatles", rating: 10 },
  {
      name: "Random guy from beach who asked people to follow his sound cloud",
      rating: 7,
  },
];

//have a describe per function
describe("getAverageRating()",()=>{
  //happy path - should return the average rating as a number given an array of artist object that have a rating property
  it("should return the average rating as a number given an array of artist objects that have a rating property",()=>{
    const expected = 8.36;
    const actual = getAverageRating(artists); //test the actual function and store its actual output

    //assert that the expected and actual are the same (chai)
    expect(actual).toEqual(expected)
  })

  //edge case - should return null if the dataset is empty
  it("should return null if the dataset is empty", ()=>{
    const expected = null;
    const actual = getAverageRating([])
    expect(actual).toEqual(expected)
  })

  //it should return a number not a string
  it("it should return a number not a string", ()=>{
    const actual = getAverageRating(artists)
    //asserting that the output of a function has to be a certain datatype
    expect(typeof actual).toEqual("number") //number, string, boolean, array, object
  })
})

describe("findArtistByName()", ()=>{
  //it should give back the whole artist object that was found
  it("it should give back the whole artist object that was found", ()=>{
    const actual = findArtistByName(artists, "Drake");
    // const expected = artists[1];
    const expected = { name: "Drake", rating: 9.8 };

    // expect(actual).to.eql(expected)
    expect(actual).toEqual(expected)
  })

  it("it should give back the null if no artist was found", ()=>{
    const actual = findArtistByName(artists, "Baby Keem");
    
   
    expect(actual).toEqual(null)
  })
})

describe("getLowRatedArtists()",()=>{
  it("should return an arry of artist objects that have less than or equal to the given rating", ()=>{
    const actual = getLowRatedArtists(artists, 7);
    const expected = [
      { name: "Rob", rating: 6.25 },
      {
        name: "Random guy from beach who asked people to follow his sound cloud",
        rating: 7,
      }
    ]

    expect(actual).toEqual(expected)
  })

  it("should return null if array is empty", ()=>{
    const actual = getLowRatedArtists([], 7);
    const expected = null

    expect(actual).toEqual(null)
  })
})



describe("partitionArtistsByRating()",()=>{
  it("should return an array with two sub arrays. First sub array will have artists with a rating less than or equal to given rating, second sub array will have artists with a rating higher than the given rating", ()=>{
    const actual = partitionArtistsByRating(artists, 7);
    const expected = [
      [
        { name: "Rob", rating: 6.25 },
        {
          name: "Random guy from beach who asked people to follow his sound cloud",
          rating: 7,
        }
      ],
      [
        { name: "Taylor Swift", rating: 9 },
        { name: "Drake", rating: 9.8 },
        { name: "J Cole", rating: 8 },
        { name: "Kendrick Lamar", rating: 8.5 },
        { name: "Beatles", rating: 10 }
      ]
    ]

    expect(actual).toEqual(expected)
  })
})



describe("assignGrade()",()=>{
  it("should return the correct grade based on score", ()=>{
    const actual = assignGrade(0.82);
    const expected = "B"

    expect(actual).toEqual(expected)
  })

  it("should return the correct grade based on score", ()=>{
    const actual = assignGrade(0.92);
    const expected = "A"

    expect(actual).toEqual(expected)
  })

  it("should return the correct grade based on score", ()=>{
    const actual = assignGrade(0.72);
    const expected = "C"

    expect(actual).toEqual(expected)
  })
})