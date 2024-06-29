function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j <= i - 1; j++) {
      if (arr[j] > arr[i]) {
        swap(i, j);
      }
    }
  }
  return arr;

  function swap(i, j) {
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}

console.log(bubbleSort([13, 46, 24, 52, 20, 9]));
