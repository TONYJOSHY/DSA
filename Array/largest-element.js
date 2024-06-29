// find the largest element in an array - brute and better solution
function largestElementBrute(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

// console.log(largestElementBrute([1, 10, 2, 7]));
// Time complexity - O(NlogN)
// Space complexity - O(1)

// find the largest element in an array - optimal solution
function largestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

// console.log(largestElement([1, 4, 2, 7]));
// Time complexity - O(N)
// Space complexity - O(1)
