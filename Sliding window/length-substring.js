/* Given a string s, find the length of the longest
substring
without repeating characters. */
function lengthOfLongestSubstring(str) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let hash = new Set();
  let newStr = "";
  while (right < str.length) {
    while (hash.has(str[right])) {
      newStr = newStr.replace(str[left], "");
      hash.delete(str[left]);
      left++;
    }
    hash.add(str[right]);
    newStr += str[right];

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return { maxLen, newStr };
}

console.log(lengthOfLongestSubstring("cadbzabcd"));
