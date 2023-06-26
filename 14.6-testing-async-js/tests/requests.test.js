const axios = require("axios");
const { index } = require("../src/requests");
const BASE_URL = "http://localhost:5000";

describe("requests.js", () => {
  describe("index()", () => {
    const fakeMockData = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
      {
        id: "dFBfdr",
        name: "Moon",
        meaning: "Sails",
        starsWithPlanets: 17,
        quadrant: "SQ3",
      },
    ];

    beforeEach(()=>{
      jest.spyOn(axios, "get")
    })

    it("should make a GET request to the appropriate URL", async () => {
      // Write code here
      //spyOn -> it will keep track of axios.get calls() and monitor the behavior of any part of the code that implement axios.get()
      // jest.spyOn(axios, "get");

      //call the index function and wait for it to complete
      await index();
      
      const expectedURL = `${BASE_URL}/constellations`;
      //expect the axios.get call that we spied on to have been called with the correct URL
      expect(axios.get).toHaveBeenCalledWith(expectedURL);

      //ending the test
      jest.clearAllMocks();
    });

    it("should return a list of constellations with fewer than 10 stars with planets", async () => {
      // Write code here

      //spy on the axios.get call in this test
      // jest.spyOn(axios, "get");

      //tell the axios.get call to not actually give back the real-time data from the api, but force the axios.get call to resolve our fake data from above
      axios.get.mockImplementation(() => Promise.resolve({ data:fakeMockData }));

      //call the index function and wait for it to complete
      const response = await index();

      const expected = fakeMockData.slice(0, 2);
      expect(response).toEqual(expected);

      jest.clearAllMocks();
    });

    it("should log an error to the console", async () => {
      // Write code here
      // jest.spyOn(axios, "get");

      axios.get.mockImplementation(() =>
        Promise.reject(new Error("Request failed."))
      );
      
      //monitor the console.error() call
      jest.spyOn(console, "error");

      await index();

      expect(console.error).toHaveBeenCalledWith("Request failed.");

      jest.clearAllMocks();
    });
  });
});


