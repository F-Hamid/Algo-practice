// * function called same
// * takes 2 arrays and compare if the each element of the first has it square in the second array
// *loop over each element of first array
// *if a square is found delete it from the second array
// *once one false is returned exit the function and return false

// *
// * return true or false

// ! BIG O n(n2)
function same(arr1, arr2) {
  arr1.forEach((el1) => {
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === el1 ** 2) {
        arr2.splice(i, 1);
      }
    }
  });
  return arr2.length ? false : true;
}
const arr1 = [2, 4, 3, 4];
const arr2 = [9, 16, 4, 16];

// ! BIG O n(n)

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (val of arr1) freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  for (val of arr2) freqCounter2[val] = (freqCounter2[val] || 0) + 1;

  console.log(freqCounter1, freqCounter2);

  for (let key in freqCounter1) {
    console.log(key, freqCounter1[key]);
    // if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
  }

  return true;
}

console.log(same2(arr1, arr2));
// console.log(same(arr1, arr2));
