function peakElement(array) {
  let low = 1;
  let high = array.length - 2;
  // Edge cases:
  if (array.length === 1) return 0;
  if (array[0] > array[1]) return 0;
  if (array[array.length - 1] > array[array.length - 2])
    return array.length - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid - 1] < array[mid] && array[mid] > array[mid + 1]) {
      return mid;
    }
    if (array[mid] > array[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}

console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));
