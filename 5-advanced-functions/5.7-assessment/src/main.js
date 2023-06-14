/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState() {}

function getWishlistParksForUser() {}

function userHasVisitedAllParksInState() {}



function userHasVisitedParkOnWishlist(users={}, user1="", user2="") {
  //get access to user1's visited
  const user1Visited = users[user1].visited // [2,30]
  //get access to user2's wishlist
  const user2Wishlist = users[user2].wishlist //[1,3]
  // console.log("********************", users, user1, user2, user1Visited, user2Wishlist)
  // const result = user2Wishlist.some((parkId)=>{
  //   return user1Visited.includes(parkId)
  // })

  let hasVisited = false;

  user2Wishlist.forEach((user2ParkId)=>{
    user1Visited.forEach((user1ParkId)=>{
      if(user2ParkId === user1ParkId){
        hasVisited = true;
      }
    })
  })


  return hasVisited;
}


// const users = {
//   "karah.branch3": {
//     visited: [1],
//     wishlist: [4, 6],
//   },
//   "dwayne.m55": {
//     visited: [2, 5, 1],
//     wishlist: [],
//   },
//   thiagostrong1: {
//     visited: [5,6],
//     wishlist: [6, 3, 2],
//   },
//   "don.kim1990": {
//     visited: [6, 2, 3, 4],
//     wishlist: [1],
//   }
// };

//[]


function getUsersForUserWishlist(users={}, userName="") {
  //have an array to put the names in
  const result = []
  //have access to the given users wishlist
  const wishList = users[userName].wishlist; //[4,6]
  //loop through the users object and for each key value pair do:
  for(let userNameKey in users){
    //look at the visited property at the current user in the loop
    const currentUserVisited =users[userNameKey].visited

    //check if at least some of the element in the currentUsers visited array are included in the given users wishlist
    const hasVisited = currentUserVisited.some((visitedId)=>{
      return wishList.includes(visitedId)
    })

    //if the currentUser has visited at least one park from the given users wishlist, then push the current user's name to the result
    if(hasVisited === true){
      result.push(userNameKey)
    }
  }

  return result

}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
