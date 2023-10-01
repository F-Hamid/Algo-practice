//  Helper  Method
// Fidinf the largest number of digits in one number in the array
function digitCount(arr) {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].toString().length;
    // if (length > largest) largest = length;
    largest = Math.max(largest, length); //Return the largest number between 2 inputs
  }

  return largest;
}

// Output the number of a give index in the number
function getDigit(num, place) {
  let string = num.toString().split("").reverse().join("");

  return string[place] ? string[place] : 0;
}

// console.log(getDigit(12345, 0));
// console.log(digitCount([23, 434, 2323, 222]));

function radix(arr) {
  let largest = digitCount(arr);

  for (let i = 0; i < largest; i++) {
    let bucket = [[], [], [], [], [], [], [], [], [], []];

    for (let j = 0; j < arr.length; j++) {
      let currentDigit = getDigit(arr[j], i);
      bucket[getDigit(arr[j], i)].push(arr[j]);
    }

    arr = [].concat(...bucket);
  }
  console.log(arr);
  return arr;
}

radix([1, 23, 67889, 450, 3]);
