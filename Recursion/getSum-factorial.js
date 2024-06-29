// find sum of n numbers using recursion
function getSum(n) {
  function sumHelper(i, n) {
    if (i >= n) return n;
    return i + sumHelper(i + 1, n);
  }
  return sumHelper(0, n);
}
// console.log(getSum(5));

// find sum of n numbers using recursion , alternate method
function getSumAlternate(n) {
  function sumHelper(i, sum) {
    if (i === 0) return sum;
    return sumHelper(i - 1, sum + i);
  }
  return sumHelper(n, 0);
}
// console.log(getSumAlternate(5));

// find factorial of number n
function getFactorial(n) {
  function factorialHelper(i) {
    if (i === 0) return 1;
    return i * factorialHelper(i - 1);
  }
  return factorialHelper(n);
}
// console.log(getFactorial(4));

// find factorial of number n, alternate method
function getFactorialAlternate(n) {
  function factorialHelper(i, sum) {
    if (i === 0) return sum;
    return factorialHelper(i - 1, sum * i);
  }
  return factorialHelper(n, 1);
}
// console.log(getFactorialAlternate(4));
