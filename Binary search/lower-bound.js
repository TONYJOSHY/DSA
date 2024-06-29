function lowerBound(array, target) {
  let low = 0;
  let high = array.length - 1;
  let foundIndex = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] >= target) {
      foundIndex = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return foundIndex;
}

console.log(lowerBound([3, 4, 6, 7, 9, 12, 16, 17], 8));
