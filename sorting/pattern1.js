// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
function pattern1() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j < 5; j++) {
      arr[i][j] = "*";
    }
  }
  return arr;
}
console.log(pattern1());

// *
// * *
// * * *
// * * * *
// * * * * *
function pattern2() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j < 5; j++) {
      if (j <= i) arr[i][j] = "*";
    }
  }
  return arr;
}
console.log(pattern2());

function pattern21() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      arr[i][j] = "*";
    }
  }
  return arr;
}
console.table(pattern21());

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function pattern3() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j < 5; j++) {
      if (j <= i) arr[i][j] = j + 1;
    }
  }
  return arr;
}
console.table(pattern3());

function pattern31() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      arr[i][j] = j + 1;
    }
  }
  return arr;
}
console.table(pattern31());

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function pattern4() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j < 5; j++) {
      if (j <= i) arr[i][j] = i + 1;
    }
  }
  return arr;
}
console.table(pattern4());

function pattern41() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      arr[i][j] = i + 1;
    }
  }
  return arr;
}
console.table(pattern41());

// * * * * *
// * * * *
// * * *
// * *
// *
function pattern6() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j < 5 - i; j++) {
      arr[i][j] = "*";
    }
  }
  return arr;
}
console.table(pattern6());

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function pattern5() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push([]);
    for (let j = 0; j < 5 - i; j++) {
      arr[i][j] = j + 1;
    }
  }
  return arr;
}
console.table(pattern5());
