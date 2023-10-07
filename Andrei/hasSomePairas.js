// Verify if two elements of two arrays have a sum of a given number
const num = 9;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

//! brut solution

function hasSumPairs(arr1, arr2, sum) {
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] + arr2[k] === sum) {
        console.log(arr1[i], arr2[k], num);
        return true;
      }
    }
  }
  return false;
}
// O(n*m)
// console.log(hasSumPairs(arr1, arr2, num));

// * Better optimized solution O(n)
// ====> Set in JS has O(1), constant time complexity!
//  So I gonna use the set to store the minus number to make the sum for every element in arr1 and use set.has() for each element in second array

function hasSumPairs2(arr1, arr2, num) {
  const mySet = new Set();
  arr1.forEach((el) => mySet.add(num - el)); //O(n)
  console.log(mySet);
  for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i];
    if (mySet.has(current)) {
      console.log(num - current, current);
      return true;
    }
  } // O(m)
  return false;
}

// console.log(hasSumPairs2(arr1, arr2, num));

// NOw if we have only one arr to check for sum

function hasSumPairs3(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr[i], sum - arr[i]);
    if (mySet.has(arr[i])) return true;
    mySet.add(sum - arr[i]);
  }
  console.log(mySet);
  return false;
}

console.log(hasSumPairs3(arr1, num));
