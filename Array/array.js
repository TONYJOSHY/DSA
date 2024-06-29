// function countarray(arr, k) {
//   let l = 0;
//   let r = 0;
//   let sum = 0;
//   let count = 0;
//   while (r < arr.length) {
//     sum += arr[r];
//     while (sum > k) {
//       sum -= arr[l];
//       l++;
//     }
//     if (sum === k) {
//       count++;
//     }
//     r++;
//   }
//   return count;
// }

// console.log(countarray([3, 1, 2, 4], 6));
// console.log(countarray([1, 2, 3], 3));
