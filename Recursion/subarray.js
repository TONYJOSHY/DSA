// find the sum of all possible subarray
function subArray(arr) {
  let result = [];
  function helper(i, sum) {
    if (i >= arr.length) {
      return result.push(sum);
    }
    helper(i + 1, sum + arr[i]);
    helper(i + 1, sum);
  }
  helper(0, 0);
  return result;
}
console.log(subArray([5, 2, 1]));
