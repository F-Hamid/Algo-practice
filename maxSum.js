// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//! BIG O(n2)
// * Loop through the array for each element time and add the N digits

const maxSum = function (arr, n) {
  let max = 0;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
    console.log(temp);
  }
  return max;
};

// BIG O(n)
// * Window Slide pattern : move by a section instead of by element
// * in this case in each iteration just add the new digit and subtract the first one

const maxSubarraySum = function (arr, n) {
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp += arr[i];
  }
  max = temp; 
  for (let i = 1; i < arr.length - n + 1; i++) {
    temp += arr[i - 1 + n];
    temp -= arr[i - 1];

    if (max < temp) max = temp;
  }
  if (max > 0) return max;
  else return "Please inter a valid input";
};
console.log(maxSubarraySum( [3, 6, 9, 2,1,8,5,6,31],3));
