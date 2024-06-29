function insertNumber(array, target) {
  let low = 0;
  let high = array.length - 1;
  let found = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] >= target) {
      found = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return found;
}

console.log(insertNumber([3, 4, 6, 7, 9, 12, 16, 17], 8));
