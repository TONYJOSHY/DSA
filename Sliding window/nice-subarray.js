// wrong solution
function niceSubArray(arr, k) {
  let l = 0;
  let r = 0;
  let oddCount = 0;
  let subArray = 0;
  while (r < arr.length) {
    if (arr[r] % 2 != 0) {
      oddCount++;
    }
    while (oddCount > k) {
      if (arr[l] % 2 != 0) {
        oddCount--;
      }
      l++;
    }
    if (oddCount == k) {
      subArray++;
    }
    r++;
  }
  return subArray;
}

console.log(niceSubArray([1, 1, 2, 1, 1], 3));

console.log(niceSubArray([2, 4, 6], 1));

console.log(niceSubArray([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
