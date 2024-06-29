function subArrayWithKintegers(arr, k) {
  let l = 0;
  let r = 0;
  let map = new Map();
  let count = 0;
  while (r < arr.length) {
    map.set(arr[r], (map.get(arr[r]) || 0) + 1);
    if (map.size === k) count++;
    while (map.size >= k) {
      map.set(arr[l], map.get(arr[l]) - 1);
      if (map.get(arr[l]) === 0) {
        map.delete(arr[l]);
      }
      if (map.size === k) {
        count++;
      }
      l++;
    }
    r++;
  }
  return count;
}

console.log(subArrayWithKintegers([1, 2, 1, 2, 3], 2)); // 7

console.log(subArrayWithKintegers([1, 2, 1, 3, 4], 3)); // 3
