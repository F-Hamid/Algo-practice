function charCount(str) {
  // * declare an empty object to hold the count
  // *if it is a valid string
  // *lower case the char
  // *Loop over our string
  // *if the char exist in object keys increment the value by 1
  // *if the char does not exist in object keys add it as a key and assign 1 as a value
  // *if the char is not a letter/number do nothing
  // *else return error
  // * return end object
}
function charCount(str) {
  let countObj = {};

  if (typeof str === "string") {
    let lowerStr = str.toLowerCase();

    for (char of lowerStr) {
      if (isAlphaNumeric(char)) countObj[char] = ++countObj[char] || 1;
    }

    return countObj;
  } else {
    return "Please insert a valid input!";
  }
}

function isAlphaNumeric(letter) {
  let code = char.charCodeAt(0); // international code for each character, number or symbol;
  if (
    !(code > 46 && code < 57) && //numeric(0-9)
    !(code > 64 && code < 91) && // upperCase (A-Z)
    !(code > 96 && code < 123) //LowerCase (a-z)
  ) {
    return false;
  }
  return true;
}

console.table(charCount("[Done] exited with code=0 in 0.157 seconds !!"));
