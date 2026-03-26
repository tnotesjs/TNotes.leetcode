/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const set = new Set(nums)
  let ans = -1
  for (const num of set) {
    let x = num,
      len = 0
    while (set.has(x)) {
      len++
      x = x * x
      if (x > 1e5) break
    }
    if (len >= 2) ans = Math.max(ans, len)
  }
  return ans
}
