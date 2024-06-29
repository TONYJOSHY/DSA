// Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
// brute
function missingNumber(arr, n) {
  for (let i = 1; i < n; i++) {
    if (!arr.includes(i)) return i;
  }
  return null;
}

console.log(missingNumber([1, 2, 4, 5], 5));
// Time complexity O(n*m)
// Space complexity O(1)

// better
function missingNumberBetter(arr, n) {
  const hash = new Array(n - 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    hash[arr[i]] = 1;
  }
  console.log(hash);
  for (let i = 1; i < hash.length; i++) {
    if (hash[i] === 0) return i;
  }
  return null;
}

console.log(missingNumberBetter([1, 3, 4, 5], 5));
// Time complexity O(n+m)
// Space complexity O(n)

// optimal 1
function missingNumberOptimal1(arr, n) {
  let arraySum = 0;
  let totalSum = n * ((n + 1) / 2);
  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }
  return totalSum - arraySum;
}

console.log(missingNumberOptimal1([1, 3, 4, 5], 5));
// Time complexity O(n)
// Space complexity O(1)
