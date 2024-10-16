//The function will take a string
// a pin should be 4 or 6 digits only
// a pin should only have numeric characters

function validatePIN(pin) {
  let intPin = +pin;
  let isValid = null;
  if (intPin > 0 && Number.isInteger(intPin)) {
    isValid = true;
  } else {
    isValid = false;
  }

  if (isValid && (pin.length === 4 || pin.length === 6)) {
    console.log(true);
    return true;
  } else {
    
    return false;
  }
}
validatePIN("a234");
