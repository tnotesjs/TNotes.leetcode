/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const n = nums.length

  // 二分查找第一个大于 0 的位置
  const findFirstPositive = () => {
    let left = 0,
      right = n
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] > 0) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }

  // 二分查找第一个大于等于 0 的位置
  const findFirstNonNegative = () => {
    let left = 0,
      right = n
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] >= 0) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }

  const firstPositive = findFirstPositive()
  const firstNonNegative = findFirstNonNegative()

  const posCount = n - firstPositive // 正整数数量
  const negCount = firstNonNegative // 负整数数量

  return Math.max(posCount, negCount)
}
