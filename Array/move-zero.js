// Move all zero to end of an array - brute

function moveZero(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) temp.push(arr[i]);
  }
  for (let i = temp.length - 1; i < arr.length; i++) {
    temp.push(0);
  }
  return temp;
}

console.log(moveZero([1, 0, 2, 3, 0, 5, 0, 7]));

// Move all zero to end of an array - optimal
function moveZeroOptimal(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === 0) {
      swap(i, j);
      j++;
    }
    i++;
  }
  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

console.log(moveZeroOptimal([1, 0, 2, 0, 3, 0, 4]));
