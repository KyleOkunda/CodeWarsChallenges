// A friend's name has four letters only
// the program filters the friends and creates an array of only friends

function friend(friends) {
  let arr = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      arr.unshift(friends[i]);
    }
  }
  return arr;
}
