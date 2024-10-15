// this is a program that returns true if a str has same number of x's and o's
//It is not case sensitive
// "xoxo" returns true
//"xxxooo" returns true
//"xxoooo" returns false
// str can have other letters "xopshnxo"

function XO(str) {
  str = str.toLowerCase();
  var strx = [];
  var stro = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      strx.unshift(str[i]);
    } else if (str[i] === "o") {
      stro.unshift(str[i]);
    } else {
      continue;
    }
  }
  if (stro.length === strx.length) {
    return true;
  } else {
    return false;
  }
}
