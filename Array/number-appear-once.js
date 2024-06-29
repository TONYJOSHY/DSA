function numberOnce(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
  return null;
}
console.log(numberOnce([2, 2, 1, 1, 4]));
// Time complexity O(n+m)
