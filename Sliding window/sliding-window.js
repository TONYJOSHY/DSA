// wrong ans
function minWindow(str1, str2) {
  let l = 0;
  let r = 0;
  let map = new Map();
  let count = 0;
  for (let val in str2) {
    map.set(val, 0);
  }
  while (r < str1.length) {
    if (map.has(str1[r])) {
      map.set(str1[r], map.get(str1[r]) + 1);
      if (map.size) r++;
    } else {
      l++;
      if (r < l) r++;
    }
  }
}
