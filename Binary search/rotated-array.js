function rotatedArraySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[low] <= array[mid]) {
      // sorted
      if (array[low] <= target && target <= array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // unsorted
      if (array[mid] <= target && target <= array[high]) {
        low = mid + 1;
      } else {
        high = mid + 1;
      }
    }
  }
  return null;
}

console.log(rotatedArraySearch([4, 5, 6, 7, 0, 1, 2, 3], 4)); // 4
