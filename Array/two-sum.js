function twoSumBrute(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
        // return [i, j];
      }
    }
  }
  return false;
  // return [];
}

// console.log(twoSumBrute([2, 6, 5, 8, 11], 14));
// Time complexity O(N^2)

function twoSumBetter(arr, target) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let more = target - arr[i];
    if (hash.hasOwnProperty(more)) {
      // return true;
      return [hash[more], i];
    }
    hash[arr[i]] = i;
  }
  // return false;
  return [-1, -1];
}

console.log(twoSumBetter([2, 6, 5, 8, 11], 15));
// Time complexity O(N)

function twoSumSortedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let compare = arr[left] + arr[right];
    if (compare === target) {
      return true;
    } else if (compare > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(twoSumSortedArray([2, 5, 6, 8, 11], 14));
// Time complexity O(N)
