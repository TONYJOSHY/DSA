// Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
function maxConsecutiveNumber(arr) {
  let maxCounter = 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
    } else if (arr[i] !== 1) {
      maxCounter = counter;
      counter = 0;
    }
  }
  return maxCounter;
}
console.log(maxConsecutiveNumber([1, 1, 0, 1, 1, 1, 0, 1]));

// Time complexity - O(N)
