//import the function we want to test here
const {getLowRatedArtists,getAverageRating} = require("../src/main")
//import the assertion library chai -> chai lets us make assertions (to compare our actual function outputs with expected outputs)
const expect = require("chai").expect;

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
    expect(actual).to.equal(expected)
  })

  //edge case - should return null if the dataset is empty
  it("should return null if the dataset is empty", ()=>{
    const expected = null;
    const actual = getAverageRating([])

    expect(actual).to.equal(expected)
  })
})
