// abcd --> "ABbCccDddd"
// MoN --> "MOoNnn"
// YoOoAh --> "YOoOooOoooAaaaaHhhhhh"

function accum(str) {
  str = str.toLowerCase();
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    let char = str[i].toUpperCase();
    let pos = i + 1;
    for (let j = 1; j < pos; j++) {
      char = char + str[i];
    }
    newStr = newStr + char;
  }

  for (let i = 1; i < newStr.length; i++) {}

  return newStr;
}
