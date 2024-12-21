// the program should return a string in camel case(remove hyphens and underscores)
// the first letter should be capital only if the original one was capital as well
// the_stealth_warrior --> theStealthWarrior
// the-stealth-warrior --> theStealthWarrior
// The-stealth_warrior --> TheStealthWarrior
// A-B-C --> ABC

function toCamelCase(str) {
  var strArray = null;
  var newStr = "";
  var word = null;

  if (str == "") {
    return str;
  }

  for (let j = 0; j < str.length; j++) {
    if (str[j] == "-") {
      strArray = str.split("-");
      break;
    } else if (str[j] == "_") {
      strArray = str.split("_");
      break;
    }
    if (j == str.length - 1) {
      return str;
    }
  }

  for (let i = 1; i < strArray.length; i++) {
    word = strArray[i];
    let tempStr = word.charAt(0).toUpperCase() + word.substring(1, word.length);
    newStr = newStr + tempStr;
  }

  newStr = strArray[0] + newStr;
  toCamelCase(newStr);
}
toCamelCase("the_stealth_warrior");
