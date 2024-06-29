// find the union of two array -- brute
function unionArray(arr1, arr2) {
  let union = [];
  for (let j = 0; j < arr1.length; j++) {
    if (!union.includes(arr1[j])) union.push(arr1[j]);
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!union.includes(arr2[j])) union.push(arr2[j]);
  }

  return union;
}

console.log(unionArray([1, 1, 2, 3, 4, 5], [2, 3, 5, 7, 8]));
// Time Complexity O(n^2 + m^2)

// find the union of two array -- optimal
function unionArray(arr1, arr2) {
  let unionSet = new Set(arr1);
  for (let j = 0; j < arr2.length; j++) {
    unionSet.add(arr2[j]);
  }
  return Array.from(unionSet);
}

console.log(unionArray([1, 1, 2, 3, 4, 5], [2, 3, 5, 7, 8]));
// Time Complexity O(n+m)

function union(arr1, arr2) {
  let hash = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (hash[arr1[i]]) {
      hash[arr1[i]] += 1;
    } else {
      hash[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (hash[arr2[i]]) {
      hash[arr2[i]] += 1;
    } else {
      hash[arr2[i]] = 1;
    }
  }
  for (let key in hash) {
    result.push(+key);
  }
  return result;
}

console.log(union([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
// Time Complexity O(n+m)
