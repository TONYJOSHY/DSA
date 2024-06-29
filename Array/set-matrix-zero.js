// Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.
// 1 1 1 1
// 1 0 0 1
// 1 1 0 1
// 1 1 1 1

// Result
// 1 0 0 1
// 0 0 0 0
// 0 0 0 0
// 1 0 0 1

const array = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

// const array = [
//   [1, 1, 1, 1],
//   [1, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 1],
// ];

function setMatrixZeroBrute(array) {
  let rows = array.length;
  let cols = array[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (array[i][j] === 0) {
        setRowToBeChanged(i);
        setColToBeChanged(j);
      }
    }
  }

  function setRowToBeChanged(row) {
    for (let j = 0; j < cols; j++) {
      if (array[row][j] !== 0) {
        array[row][j] = -1;
      }
    }
  }
  function setColToBeChanged(col) {
    for (let i = 0; i < rows; i++) {
      if (array[i][col] !== 0) {
        array[i][col] = -1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (array[i][j] === -1) {
        array[i][j] = 0;
      }
    }
  }
  return array;
}
// console.table(setMatrixZeroBrute(array));
// Time complexity O(N*M) * O(N+M) + O(N*M) = O(N^3)

function setMatrixZeroBetter(array) {
  let rows = array.length;
  let cols = array[0].length;
  let row = new Array(rows).fill(0);
  let col = new Array(cols).fill(0);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (array[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < col.length; j++) {
      if (row[i] === 1 || col[j] === 1) {
        array[i][j] = 0;
      }
    }
  }
  return array;
}
// console.table(setMatrixZeroBetter(array));
// Time complexity - O(2*N*M)
// Space complexity - O(N+M)
