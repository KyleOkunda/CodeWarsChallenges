// An isogram is a word that has not no repeating letter
// Ignore the case
// "Dermatoglyphics" --> true
// "aba" --> false
// mOose --> false

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    var c = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[i]) {
        c++;
        if (c > 1) {
          return false;
        }
      }
    }
  }
  return true;
}
