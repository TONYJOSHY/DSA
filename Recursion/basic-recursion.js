// Write a recursive function to print number from 1 to n
function printNumber(n) {
  function printHelper(i, n) {
    if (i >= n) return;
    console.log(i);
    printHelper(i + 1, n);
  }
  printHelper(1, n);
}
// printNumber(5);

// Write a recursive function to print number from 1 to n using backtracking
function printNumberBacktracking(n) {
  function printHelper(i) {
    if (i < 1) return;
    printHelper(i - 1);
    console.log(i);
  }
  printHelper(n);
}
// printNumberBacktracking(5);

// Write a recursive function to print number from n to 1
function printNumberReverse(n) {
  function printHelper(i, n) {
    if (i <= 0) return;
    console.log(i);
    printHelper(i - 1, n);
  }
  printHelper((i = n), n);
}
// printNumberReverse(5);

// Write a recursive function to print number from n to 1 using backtracking
function printNumberReverseBacktracking(n) {
  function printHelper(i) {
    if (i > n) return;
    printHelper(i + 1);
    console.log(i);
  }
  printHelper(1);
}
// printNumberReverseBacktracking(5);
