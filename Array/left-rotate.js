// left rotate array by one place

function leftRotate(arr) {
  let first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = first;
  return arr;
}

console.log(leftRotate([1, 2, 3, 4]));

// Time complexity - O(N)
// space complexity O(1)

function leftRotateNPlaces(arr, n) {
  let rotate = n % arr.length;
  let prevArray = arr.slice(0, rotate);
  for (let i = rotate; i < arr.length; i++) {
    arr[i - rotate] = arr[i];
  }
  for (let i = arr.length - rotate; i < arr.length; i++) {
    arr[i] = prevArray[i - (arr.length - rotate)];
  }
  return arr;
}

console.log(leftRotateNPlaces([1, 2, 3, 4], 2));

// Time complexity O(N + rotate)
// space complexity O(rotate)
