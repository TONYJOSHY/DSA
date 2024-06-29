// mistake
function intersection(arr1, arr2) {
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
    // let loop = hash[key] / 2;
    // for (let i = 0; i <= loop; i++) {
    // }
  }
  return result;
}

console.log(intersection([1, 2, 2, 3, 4], [2, 2, 3, 5]));
