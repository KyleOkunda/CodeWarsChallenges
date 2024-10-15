//digital root returns the sum of the recursuve digits of a number
//25 -> 2 + 5 = 7
//56789 -> 5 + 6 + 7 + 8 + 9 = 35 -> 3 + 5 = 8
// and so on...

function digitalRoot(n) {
  let stringNo = n.toString();
  if (stringNo.length === 1) {
    console.log(stringNo[0]);
  } else {
    //sumOfDigits();
    let sum = 0;

    for (let i = 0; i < stringNo.length; i++) {
      sum = parseInt(stringNo[i]) + sum;
    }
    digitalRoot(sum);
  }
}

digitalRoot(16);
