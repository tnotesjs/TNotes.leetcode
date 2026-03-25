/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  const dp = new Map()
  let ans = 1
  for (const x of arr) {
    const prev = (dp.get(x - difference) || 0) + 1
    dp.set(x, prev)
    if (prev > ans) ans = prev
  }
  return ans
}
