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
      console.log(str);
      return str;
    }
  }

  for (let i = 1; i < strArray.length; i++) {
    word = strArray[i];
    let tempStr = word.charAt(0).toUpperCase() + word.substring(1, word.length);
    newStr = newStr + tempStr;
  }

  newStr = `"` + strArray[0] + newStr + `"`;
  toCamelCase(newStr);
}
toCamelCase("the_stealth_warrior");
