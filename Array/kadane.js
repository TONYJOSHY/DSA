function kadaneAlogithm(arr) {
  let max_sum = 0;
  let cur_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    cur_sum += arr[i];
    if (cur_sum < 0) {
      cur_sum = 0;
    }
    max_sum = Math.max(max_sum, cur_sum);
  }
  return max_sum;
}

console.log(kadaneAlogithm([-2, 7, -3, 4]));

console.log(kadaneAlogithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(kadaneAlogithm([1]));
