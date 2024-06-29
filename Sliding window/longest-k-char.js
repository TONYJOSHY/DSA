function fruitInbasket(array, k) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let map = new Map();
  while (right < array.length) {
    map.set(array[right], (map.get(array[right]) || 0) + 1);
    if (map.size <= k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    while (map.size > k) {
      map.set(array[left], map.get(array[left]) - 1);
      if (map.get(array[left]) === 0) {
        map.delete(array[left]);
      }
      left++;
    }
    right++;
  }
  return maxLen;
}

console.log(fruitInbasket("aaabbcd", 2));
