//  Helper  Method
function getDigit(num, place) {
  let string = num.toString().split("").reverse().join("");

  return string[place] ? string[place] : 0;
}

getDigit(12345, 3);
console.log(getDigit(12345, 5));
