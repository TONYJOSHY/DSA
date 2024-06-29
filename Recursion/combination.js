function combinationSum(candidates, target) {
  const result = [];

  function backtrack(remainingTarget, combination, startIndex) {
    if (startIndex >= candidates.length) {
      if (remainingTarget === 0) {
        // If the remaining target is 0, we found a valid combination
        result.push([...combination]);
        return;
      }
      return;
    }

    if (candidates[startIndex] <= remainingTarget) {
      // Include the candidate and continue searching
      combination.push(candidates[startIndex]);
      backtrack(
        remainingTarget - candidates[startIndex],
        combination,
        startIndex
      );
      // Exclude the candidate (backtrack)
      combination.pop();
    }
    backtrack(remainingTarget, combination, startIndex + 1);
  }

  backtrack(target, [], 0);
  return result;
}
console.log(combinationSum([2, 3, 5], 8));

function combination(candidates) {
  const result = [];
  function backtrack(combination) {
    result.push([...combination]);
    if (combination.length >= candidates.length) return;
    // Include the candidate and continue searching
    let i = 0;
    while (i < candidates.length) {
      combination.push(candidates[i]);
      backtrack(combination, i);
      combination.pop();
      i++;
    }
  }
  backtrack([], 0);
  return result;
}
console.log(combination([2, 3, 5]));
