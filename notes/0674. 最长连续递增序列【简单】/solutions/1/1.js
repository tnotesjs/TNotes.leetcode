/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  let maxLen = 1 // 至少有一个元素
  let currentLen = 1 // 当前连续递增序列长度

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 如果当前元素大于前一个元素，递增序列继续
      currentLen++
      // 更新最大长度
      maxLen = Math.max(maxLen, currentLen)
    } else {
      // 如果不满足递增条件，重置当前长度
      currentLen = 1
    }
  }

  return maxLen
}
