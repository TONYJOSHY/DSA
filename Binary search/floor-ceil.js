// You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
// The floor of x is the largest element in the array which is smaller than or equal to x.
// The ceiling of x is the smallest element in the array greater than or equal to x.

function floorAndCeil(array, target) {
  let low = 0;
  let high = array.length - 1;
  let floor = array[0];
  let ceil = array[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);
    if (array[mid] === target) {
      floor = array[mid];
      ceil = array[mid];
      return { floor, ceil };
    } else if (array[mid] > target) {
      high = mid - 1;
      ceil = array[mid];
    } else {
      low = mid + 1;
      floor = array[mid];
    }
  }
  return { floor, ceil };
}

console.log(floorAndCeil([10, 20, 30, 40, 50], 35));
