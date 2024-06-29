function twoSum(nums, target) {
  function findTwoSum(index1, index2) {
    // Base case: if we've exhausted all pairs without finding a solution
    if (index1 >= nums.length - 1) {
      return null;
    }

    // Check if the current pair of indices sum to the target
    if (index2 < nums.length) {
      if (nums[index1] + nums[index2] === target) return [index1, index2];
    }

    // Move to the next pair
    if (index2 < nums.length) {
      return findTwoSum(index1, index2 + 1);
    } else {
      return findTwoSum(index1 + 1, index1 + 2);
    }
  }

  // Start the recursion with the first pair of indices
  return findTwoSum(0, 1);
}

// Example usage:
const nums = [1, 2, 7, 15];
const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1]

function palindrome(str) {
  function helper(i, end) {
    if (i >= str.length) return true;
    if (str[i] !== str[end]) return false;
    return helper(i + 1, end - 1);
  }
  return helper(0, str.length - 1);
}
// console.log(palindrome("120"));

function threeSum(arr, target) {
  let result = [];
  function helper(i, j, k) {
    if (k >= arr.length) return null;
    if (k < arr.length && arr[i] + arr[j] + arr[k] === target)
      return result.push([arr[i], arr[j], arr[k]]);
    if (k < arr.length) {
      return helper(i, j, k + 1);
    } else {
      return helper(i + 1, i + 2, i + 3);
    }
  }
  helper(0, 1, 2);
  return result;
}

// console.log(threeSum([0, 0, 0], 1));

function fourSum(arr, target) {
  let result = [];
  function helper(i, j, k, l) {
    if (l >= arr.length) return null;
    if (l < arr.length && arr[i] + arr[j] + arr[k] + arr[l] === target) {
      // console.log([arr[i], arr[j], arr[k], arr[l]]);
      result.push([arr[i], arr[j], arr[k], arr[l]]);
    }
    if (l < arr.length) {
      return helper(i, j, k, l + 1);
    } else {
      return helper(i + 1, i + 2, i + 3, i + 4);
    }
  }
  helper(0, 1, 2, 3);
  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// console.log(fourSum([2, 2, 2, 2, 2], 8));
