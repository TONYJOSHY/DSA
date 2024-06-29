/*
Your score is the sum of the points of the cards you have taken.
Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

Example 1:
Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

Example 2:
Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.

Example 3:
Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.

*/

function maxPoints(array, k) {
  let lSum = 0;
  let rSum = 0;
  let maxSum = 0;
  let rIndex = array.length - 1;
  for (let i = 0; i < k; i++) {
    lSum += array[i];
  }
  maxSum = lSum;
  for (let i = k - 1; i >= 0; i--) {
    lSum -= array[i];
    rSum += array[rIndex];
    rIndex -= 1;
    maxSum = Math.max(maxSum, lSum + rSum);
  }
  return maxSum;
}

console.log(maxPoints([1, 2, 3, 4, 5, 6, 1], 3));
