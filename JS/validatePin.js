//The function will take a string
// a pin should be 4 or 6 digits only
// a pin should only have numeric characters

function validatePIN(pin) {
  let intPin = +pin;
  if (Number.isInteger(intPin) && (pin.length === 4 || pin.length === 6)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
validatePIN("1234");
