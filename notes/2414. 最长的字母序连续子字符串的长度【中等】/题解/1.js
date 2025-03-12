/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  const len = s.length;
  if (len === 1) return len;

  let ans = (curMax = 1);
  for (let i = 0; i + 1 < len; i++) {
    if (s[i + 1].codePointAt() - s[i].codePointAt() === 1) {
      curMax++;
    } else {
      curMax = 1;
    }
    ans = Math.max(curMax, ans);
  }

  return ans;
};
