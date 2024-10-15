// A friend's name has four letters only
// the program filters the friends and creates an array of only friends

function friend(friends) {
  let arr = [];
  for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].length);
    if (friends[i].length === 4) {
      arr.unshift(friends[i]);
    }
  }
  console.log(arr);
  return arr;
}
let array = ["Mark", "Ryan"];
friend(array);
