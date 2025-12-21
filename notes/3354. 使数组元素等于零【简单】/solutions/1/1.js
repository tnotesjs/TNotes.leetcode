/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function (nums) {
  const n = nums.length
  const total = nums.reduce((a, b) => a + b, 0)
  let leftSum = 0
  let count = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      const rightSum = total - leftSum
      // 左边之和等于右边之和，向左向右都可以
      if (leftSum === rightSum) {
        count += 2
      } else if (Math.abs(leftSum - rightSum) === 1) {
        // 左右差 1，只有一个方向可以
        count += 1
      }
    }
    leftSum += nums[i]
  }

  return count
}
