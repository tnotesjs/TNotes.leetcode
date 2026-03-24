/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums)
  let maxLen = 0
  for (const num of set) {
    // 只从序列的起点开始计数
    if (!set.has(num - 1)) {
      let cur = num
      let len = 1
      while (set.has(cur + 1)) {
        cur++
        len++
      }
      maxLen = Math.max(maxLen, len)
    }
  }
  return maxLen
}
