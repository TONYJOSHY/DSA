// leader in array

function leaderInArray(arr) {
  let result = [];
  let min = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > min) {
      min = arr[i];
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(leaderInArray([10, 22, 12, 3, 0, 6]));
