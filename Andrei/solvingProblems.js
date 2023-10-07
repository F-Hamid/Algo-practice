// Given 2 arrays, create a function that
// let's a user know (true/false) whether these two arrays contain any common items //For Example:
const array1 = ["a", "a", "b", "c", "x", "i"];
const array2 = ["z", "z", "y", "b", "i"];
//should return false.
//-
const array3 = "ocean";
const array4 = "freedom";
//should return true.

// !Brut Force

const common = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    //O(n)
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr2[j]) return [true, arr1[i]]; //O(n)
    }
  }
  return false;
};

// console.log(common(array3, array4)); //O(n * m)

//* Better approach

// 1-convert the first array to an object
// 2- iterate through the second array and look for each element if it exist in the object properties.

function containsCommon(arr1, arr2) {
  let bigArr = [];
  let smallArr = [];
  const obj = {};
  // Make sure all the elements are iterated
  if (arr1 > arr2) {
    smallArr = arr1;
    bigArr = arr2;
  } else {
    smallArr = arr2;
    bigArr = arr1;
  }

  for (let k = 0; k < smallArr.length; k++) {
    obj[smallArr[k]] = true;
    console.log(obj);
  } //O(n)

  for (let i = 0; i < bigArr.length; i++) {
    if (obj[bigArr[i]]) {
      console.log(bigArr[i]);
      return obj[bigArr[i]];
    }
  }
  // O(n);
  return false;
}
// * Big O of (n+m)
console.log(containsCommon(array1, array2));
