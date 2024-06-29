// function firstLastOccurance(array, target) {
//   let low = 0;
//   let high = array.length - 1;
//   let first = 0;
//   let last = 0;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (array[mid] >= target) {
//       low = mid + 1;
//       first = low;
//     } else {
//       high = mid - 1;
//       last = high;
//     }
//   }
//   return { first, last };
// }

// console.log(firstLastOccurance([1, 2, 3, 4, 4, 4, 5], 4)); // [ 3, 5 ]
