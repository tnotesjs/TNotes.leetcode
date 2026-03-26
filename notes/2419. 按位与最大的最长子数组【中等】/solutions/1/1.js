/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const maxVal = Math.max(...nums)
  let ans = 0,
    cur = 0
  for (const num of nums) {
    if (num === maxVal) {
      cur++
      ans = Math.max(ans, cur)
    } else {
      cur = 0
    }
  }
  return ans
}
