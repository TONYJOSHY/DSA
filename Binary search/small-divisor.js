function smallestDivisor(array, threshold) {
  let low = 1;
  let high = threshold;
  let divisor = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += Math.ceil(array[i] / mid);
    }
    if (sum <= threshold) {
      divisor = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return divisor;
}

console.log(smallestDivisor([8, 4, 2, 3], 10));
