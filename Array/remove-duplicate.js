// Remove duplicates from a sorted array

function removeDuplicate(arr) {
  let newArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(removeDuplicate([1, 1, 2, 3, 3]));

// Remove duplicates in place from a sorted array - mistake

function removeDuplicateInPlace(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return arr;
}

console.log(removeDuplicateInPlace([1, 1, 2, 3, 3]));
