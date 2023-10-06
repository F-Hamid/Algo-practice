console.log(j, arr[i]); //  Helper  Method
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

  let bucket = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < largest; i++) {
    console.log(arr[i]);
    for (let j = 0; j < 10; j++) {
      let currentDigit = (getDigit(arr[i]), j);
      console.log(j, arr[i]);

      if (currentDigit) {
        // bucket[j].push(arr[i]);
        console.log(j, arr[i]);
      }
    }
    // console.log(bucket);
    arr = bucket;
  }
}

radix([1, 23, 67889, 3]);
