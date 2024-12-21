/* This function returns the number of
   characters that have appeared more than once
   in a string
   
   bbaa --> 2
   aab --> 1
   bbbaaaddddeee --> 4
   */

function duplicateCount(text) {
  text = text.toLowerCase();
  var c = 0;
  for (let i = 0; i < text.length; i++) {
    let letterCounter = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[j] === text[i]) {
        letterCounter++;

        var charArr = Array.from(text);
        charArr.forEach((element) => {
          if (text[j] === element) {
            charArr.splice(j, 1);
          }
        });

        if (letterCounter > 1) {
          c++;

          break;
        }
      }
    }
    text = charArr.join("");
    console.log(text);
  }
  console.log(c);
  // console.log(text);
}
duplicateCount("bcaabc");
