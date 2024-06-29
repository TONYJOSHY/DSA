function permutation(arr) {
  let result = [];
  let combination = [];
  let map = Array(arr.length).fill(false);
  function helper() {
    if (combination.length === arr.length) {
      result.push([...combination]);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!map[i]) {
        combination.push(arr[i]);
        map[i] = true;
        helper();
        combination.pop();
        map[i] = false;
      }
    }
  }
  helper();
  return result;
}

console.log(permutation([1, 2, 3]));
