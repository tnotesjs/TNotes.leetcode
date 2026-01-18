/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
  let maxLen = -1

  for (let i = 0; i < nums.length - 1; i++) {
    // 检查第一个条件：nums[i+1] = nums[i] + 1
    if (nums[i + 1] !== nums[i] + 1) continue

    let len = 2
    let expected = -1 // 下一个期望的差值（1 或 -1）

    // 向右扩展
    for (let j = i + 2; j < nums.length; j++) {
      const diff = nums[j] - nums[j - 1]
      if (diff === expected) {
        len++
        expected = -expected // 切换期望的差值
      } else {
        break
      }
    }

    maxLen = Math.max(maxLen, len)
  }

  return maxLen
}
