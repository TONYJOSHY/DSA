// Find the nth fibinocci number
function fibinocciNumber(n) {
  if (n <= 1) return n;
  return fibinocciNumber(n - 1) + fibinocciNumber(n - 2);
}
console.log(fibinocciNumber(4));
