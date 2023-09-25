// * function that take two strings
// *loop through the first string and check ever letter in the second string corresponds
// *if true delete it if false return
// *
// *
// *

//! BIG O(n2)

const str1 = "33mnj!";
const str2 = "j!nm33";

function anagramCheck(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  if (arr1.length !== arr2.length) return false;
  for (let char1 of arr1) {
    for (let i = 0; i < arr2.length; i++) {
      if (char1 === arr2[i]) {
        arr2.splice(i, 1);
      }
    }
  }

  return arr2.length ? false : true;
}

console.log(anagramCheck(str1, str2));

// ! BIG O(n)

let freqCounter1 = {};
let freqCounter2 = {};

function anagram2(str1, str2) {
  for (char1 of str1) freqCounter1[char1] = (freqCounter1[char1] || 0) + 1;

  for (char2 of str2) freqCounter2[char2] = (freqCounter2[char2] || 0) + 1;

  for (char1 in freqCounter1) {
    return freqCounter1[char1] === freqCounter2[char2] ? true : false;
  }

  console.log(freqCounter1, freqCounter2);
}

anagram2(str1, str2);
