function countUniqueValue(arr) {
  let counter = {};
  let i = 0;
  for (num of arr) counter[num] = counter[num] ? (counter[num] += 1) : 1;
  console.log(counter);
  for (let key in counter) {
    i++;
  }
  return i;
}
function countUniqueValue2(arr) {
  arr.sort((a, b) => a - b);
  // console.log(arr);
  let i = 0;
  let start = 0;
  // let right = arr.length - 1;

  while (start < arr.length) {
    let minus = arr[start] - arr[start + 1];
    if (minus === 0) {
      start++;
    } else {
      start++;
      i++;
    }
  }
  return i;
}

console.log(countUniqueValue2([1, 1, 1, 1, 3]));
