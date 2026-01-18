/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let maxLen = 0

  for (let i = 0; i < nums.length; i++) {
    // 起点必须是偶数且不超过 threshold
    if (nums[i] % 2 !== 0 || nums[i] > threshold) continue

    let len = 1
    // 向右扩展
    for (let j = i + 1; j < nums.length; j++) {
      // 检查当前元素是否满足条件
      if (nums[j] > threshold || nums[j] % 2 === nums[j - 1] % 2) {
        break
      }
      len++
    }
    maxLen = Math.max(maxLen, len)
  }

  return maxLen
}
