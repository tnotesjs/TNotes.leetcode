/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let ans = 0,
    left = 0,
    right = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      right++;
      ans = Math.max(ans, set.size);
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return ans;
};

// var lengthOfLongestSubstring = function (s) {
//   const len = s.length, set = new Set();
//   let ans = 0, end = -1;
//   for (let i = 0; i < len; i++) { // 收缩窗口
//     if (i !== 0) set.delete(s.charAt(i - 1));
//     while (end + 1 < len && !set.has(s.charAt(end + 1))) { // 扩展窗口
//       set.add(s.charAt(end + 1));
//       end++;
//     }
//     ans = Math.max(ans, set.size);
//   }
//   return ans;
// };
