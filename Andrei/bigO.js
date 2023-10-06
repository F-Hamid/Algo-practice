// Big O exercice

// What is the Big O of the below function? (Hint, you may want to go line by line)
function pairOfArrays(arr) {
  arr.forEach((element) => { //O(n)
    arr.forEach((el) => {
      console.log(element, el); //O(n)
    });
  });
}

// O(n˘2))

pairOfArrays([1, 2, 3, 4, 5]);
