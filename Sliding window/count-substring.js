function countSubstring(str, k) {
  let l = 0;
  let r = 0;
  let map = new Map();
  let count = 0;
  while (r < str.length) {
    map.set(str[r], (map.get(str[r]) || 0) + 1);
    while (map.size === k) {
      count += str.length - r;
      map.set(str[l], map.get(str[l]) - 1);
      if (map.get(str[l]) === 0) {
        map.delete(str[l]);
      }
      l++;
    }
    r++;
  }
  return count;
}

console.log(countSubstring("bbacba", 3));

console.log(countSubstring("abcabc", 3));
console.log(countSubstring("aaacb", 3));
console.log(countSubstring("acb", 3));
