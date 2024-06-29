function sortedRotationMin(array) {
  let low = 0;
  let high = array.length - 1;
  let min = array[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] >= array[low]) {
      if (array[low] <= min) {
        min = array[low];
      }
      low = mid + 1;
    } else if (array[mid] <= array[high]) {
      if (array[low] <= min) {
        min = array[low];
      }
      high = mid - 1;
    }
  }
  return min;
}

console.log(sortedRotationMin([3, 4, 5, 1, 2]));
