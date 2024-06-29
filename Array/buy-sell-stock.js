// You are given an array of prices where prices[i] is the price of a given stock on an ith day.
function buySellStock(arr) {
  let buy = arr[0];
  let sell = null;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < buy) buy = arr[i];
    if (arr[i + 1] > arr[i]) sell = arr[i + 1];
  }
  return sell - buy;
}

console.log(buySellStock([7, 1, 5, 3, 6, 4]));
