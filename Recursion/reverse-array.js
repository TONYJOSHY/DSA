// reverse an array using recursion
function reverseArray(arr) {
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function reverseHelper(start, end) {
    if (start > end) return;
    swap(start, end);
    return reverseHelper(start + 1, end - 1);
  }
  reverseHelper(0, arr.length - 1);
  return arr;
}
const newArray = [1, 2, 3, 4, 5];
// console.log(reverseArray(newArray)); // [5,4,5,2,1]

// reverse an array using recursion , alternate method
function reverseArrayAlternate(arr) {
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function reverseHelper(i, n) {
    if (i >= n / 2) return;
    swap(i, n - i - 1);
    return reverseHelper(i + 1, n);
  }
  reverseHelper(0, arr.length);
  return arr;
}
const newArray2 = [1, 2, 3, 4, 5];
// console.log(reverseArrayAlternate(newArray2));

// check the given string is palindrome
function checkPalindrome(str) {
  function checker(start, end) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return checker(start + 1, end - 1);
  }
  return checker(0, str.length - 1);
}
console.log(checkPalindrome("MADAM"));
