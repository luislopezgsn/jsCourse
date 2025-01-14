//DECLARING FRIENDS ARRAYS
const bobsFollowers = ["PEPE", "JOSE", "MANUEL", "RAMON"];
const tinasFollowers = ["PEPE", "CLARA", "RAMON"];
let mutualFollowers = [];

//LOOPING THROUGH BOB'S FOLLOWERS
for (let i = 0; i < bobsFollowers.length; i++) {
    //LOOPING THROUGH TINA'S FOLLOWERS
  for (let j = 0; j < tinasFollowers.length; j++) {
    //CHECKING FOR MUTUAL FOLLOWERS
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      console.log(mutualFollowers)
    }
  }
}
