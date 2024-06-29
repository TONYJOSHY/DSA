function sqrtNth(number, root) {
  let low = 0;
  let high = number;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (Math.pow(mid, root) === number) {
      return mid;
    } else if (Math.pow(mid, root) < number) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(sqrtNth(27, 3));

console.log(sqrtNth(69, 4));
