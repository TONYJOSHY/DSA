function sqrt(number) {
  let low = 0;
  let high = number;
  let value = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid > number) {
      high = mid - 1;
    } else {
      value = mid;
      low = low + 1;
    }
  }
  return value;
}

console.log(sqrt(28));

console.log(sqrt(36));
