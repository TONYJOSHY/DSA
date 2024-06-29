function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swapped = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([13, 46, 24, 53, 20, 9]));

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}

console.log(bubble([5, 4, 3, 2, 1]));
