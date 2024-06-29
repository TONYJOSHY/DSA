// find the second largest element in an array
function secondLargest(arr) {
  let largest = arr[0];
  let second = null;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] < largest) {
      second = arr[i];
    }
  }
  return second;
}

// console.log(secondLargest([10, 5, 8, 2])); // 8
// console.log(secondLargest([1, 2, 4, 7, 7])); // 4

// find the second smallest element in an array
function secondSmallest(arr) {
  let smallest = arr[0];
  let second = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second = smallest;
      smallest = arr[i];
    } else if (arr[i] < second && arr[i] !== smallest) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondSmallest([10, 5, 8, 2])); // 5
console.log(secondSmallest([1, 2, 4, 7, 7])); // 2

// Time complexity - O(N)
// Space complexity - O(1)
