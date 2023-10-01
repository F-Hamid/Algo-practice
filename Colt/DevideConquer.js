const indexNum = function (arr, num) {
  if (arr.includes(arr[num])) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let tempIndex = 0;
    const middle = (min, max) => Math.floor((min + max) / 2);

    //* Logic
    while (num !== arr[tempIndex]) {
      while (num < arr[tempIndex]) {
        tempIndex = middle(arr.indexOf(arr[0]), arr.indexOf(arr[tempIndex]));
        console.log(arr[tempIndex]);
      }
      // else if (ind === arr[tempIndex]) return tempIndex;
      while (num > arr[tempIndex]) {
        tempIndex = middle(
          arr.indexOf(arr[tempIndex]),
          arr.indexOf(arr[arr.length - 1])
        );
        console.log(arr[tempIndex]);
      }
      if (num === arr[tempIndex]) return arr[tempIndex];
    }
    console.log(arr[tempIndex]);
    return tempIndex;
  } else return "Number not found";
};

indexNum(
  [
    27, 68, 71, 45, 6, 92, 52, 34, 23, 51, 40, 98, 90, 53, 85, 38, 76, 50, 56,
    75, 84, 96, 21, 66, 89, 79, 63, 31, 15, 91, 13, 93, 81, 59, 16, 78, 19, 48,
    7, 36, 61, 12, 70, 64, 67, 87, 35, 8, 99, 2, 46, 73, 30, 77, 95, 29, 41, 4,
    37, 28, 97, 94, 17, 58, 0, 60, 11, 47, 65, 33, 18, 74, 9, 24, 26, 39, 3, 20,
    88, 49, 10, 42, 80, 83, 55, 32, 25, 54, 5, 86, 22, 14, 72, 43, 44, 57, 1,
    69, 62, 82, 56,
  ],
  4
);
