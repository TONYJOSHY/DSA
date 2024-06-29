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

console.log(fruitInbasket([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 2));

function sw5(arr, k) {
  let l = 0;
  let r = 0;
  let map = new Map();
  let max = 0;
  while (r < arr.length) {
    map.set(arr[r], (map.get(arr[r]) || 0) + 1);
    while (map.size > k) {
      map.set(arr[l], map.get(arr[l]) - 1);
      if (map.get(arr[l]) <= 0) {
        map.delete(arr[l]);
      }
      l++;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
}

console.log(sw5([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 2));
console.log(sw5([2, 1, 2], 3));
console.log(sw5([0, 1, 2, 2, 2, 2], 2));
