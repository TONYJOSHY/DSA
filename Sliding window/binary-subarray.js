function binarySubArrayHelper(array, k) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let count = 0;
  while (right < array.length) {
    sum += array[right];
    while (sum > k) {
      sum -= array[left];
      left++;
    }
    count += right - left + 1;
    right++;
  }
  return count;
}

function binarySubArray(array, k) {
  return binarySubArrayHelper(array, k) - binarySubArrayHelper(array, k - 1);
}

console.log(binarySubArray([1, 0, 1, 0, 1], 2));
