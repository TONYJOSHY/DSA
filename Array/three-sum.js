function threeSum(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          set.add([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return Array.from(set);
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function threeSumSorted(arr) {
  // let result = [];
  let set = new Set();
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray);
  for (let i = 0; i < sortedArray.length - 2; i++) {
    for (let j = i + 1; j < sortedArray.length - 1; j++) {
      for (let k = 0; k < sortedArray.length; k++) {
        if (sortedArray[i] + sortedArray[j] + sortedArray[k] === 0) {
          // result.push([sortedArray[i], sortedArray[j], sortedArray[k]]);
          set.add([sortedArray[i], sortedArray[j], sortedArray[k]]);
        }
      }
    }
  }
  // return result;
  return Array.from(set);
}
console.log(threeSumSorted([-1, 0, 1, 2, -1, -4]));
