// check array is sorted
function sortedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}

console.log(sortedArray([1, 2, 3, 4]));
console.log(sortedArray([1, 5, 3, 4]));

// Time complexity - O(N)
