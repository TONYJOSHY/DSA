function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] > target) {
      high = mid - 1;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return null;
}

console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6));

function bsRecursion(array, target) {
  let low = 0;
  let high = array.length - 1;
  return helper(low, high);
  function helper(newLow, newHigh) {
    if (newLow > newHigh) return null;
    let mid = Math.floor((newLow + newHigh) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      return helper(mid + 1, newHigh);
    } else {
      return helper(newLow, mid - 1);
    }
  }
}

console.log(bsRecursion([3, 4, 6, 7, 9, 12, 16, 17], 6));
