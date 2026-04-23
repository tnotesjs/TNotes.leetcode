/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function (nums, pattern) {
  const n = nums.length,
    m = pattern.length
  // 将 nums 转换为差分模式
  const text = new Array(n - 1)
  for (let i = 0; i < n - 1; i++) {
    const diff = nums[i + 1] - nums[i]
    text[i] = diff > 0 ? 1 : diff < 0 ? -1 : 0
  }
  // KMP
  const fail = new Array(m).fill(0)
  fail[0] = -1
  for (let i = 1; i < m; i++) {
    let j = fail[i - 1]
    while (j >= 0 && pattern[j + 1] !== pattern[i]) j = fail[j]
    fail[i] = pattern[j + 1] === pattern[i] ? j + 1 : -1
  }
  let count = 0,
    j = -1
  for (let i = 0; i < text.length; i++) {
    while (j >= 0 && pattern[j + 1] !== text[i]) j = fail[j]
    if (pattern[j + 1] === text[i]) j++
    if (j === m - 1) {
      count++
      j = fail[j]
    }
  }
  return count
}
