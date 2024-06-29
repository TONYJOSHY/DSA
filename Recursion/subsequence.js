// print the subsequence of an array
function printsubSequence(arr) {
  function sequenceHelper(index, seq) {
    if (index >= arr.length) {
      console.log(seq);
      return;
    }
    seq.push(arr[index]);
    sequenceHelper(index + 1, seq);
    seq.pop();
    sequenceHelper(index + 1, seq);
  }
  return sequenceHelper(0, []);
}
printsubSequence([3, 1, 2]);
// console.log(printsubSequence([3, 1, 2]));

// print the subsequence of an array in which the sum is k
function subSequenceWithSum(arr, k) {
  function sequenceHelper(index, seq, currentSum) {
    if (index >= arr.length) {
      if (k == currentSum) {
        console.log(seq);
      }
      // console.log(currentSum);
      return;
    }
    seq.push(arr[index]);
    sequenceHelper(index + 1, seq, (currentSum += arr[index]));
    seq.pop();
    sequenceHelper(index + 1, seq, (currentSum -= arr[index]));
  }
  return sequenceHelper(0, [], 0);
}
// subSequenceWithSum([3, 1, 2], 4);

// print only one subsequence of an array in which the sum is k
function printOneSubSequence(arr, k) {
  function sequenceHelper(index, seq, currentSum) {
    if (index >= arr.length) {
      if (k === currentSum) {
        console.log(seq);
        return true;
      }
      // console.log(currentSum);
      return false;
    }
    seq.push(arr[index]);
    if (sequenceHelper(index + 1, seq, (currentSum += arr[index]))) return true;
    seq.pop();
    if (sequenceHelper(index + 1, seq, (currentSum -= arr[index]))) return true;
    return false;
  }
  return sequenceHelper(0, [], 0);
}
// printOneSubSequence([3, 2, 4, 2], 4);

// print only the count of subsequence of an array in which the sum is k
function countSubSequence(arr, k) {
  function sequenceHelper(index, seq, currentSum) {
    if (index >= arr.length) {
      if (k === currentSum) {
        return 1;
      }
      return 0;
    }
    seq.push(arr[index]);
    let l = sequenceHelper(index + 1, seq, (currentSum += arr[index]));
    seq.pop();
    let r = sequenceHelper(index + 1, seq, (currentSum -= arr[index]));
    return l + r;
  }
  return sequenceHelper(0, [], 0);
}
countSubSequence([3, 1, 2], 3);
