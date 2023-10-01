// Fibonacci sequence : 0,1,1,2,3,5,8,13... (i=(i-1) + (i-2))

function fibonacci(num) {
  if (num < 2) return num;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}

const sequenceLength = 20;
for (let i = 0; i < sequenceLength; i++) console.log(fibonacci(i));
