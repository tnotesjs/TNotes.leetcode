/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  function helper(left, right) {
    // base case：只有一个元素
    if (left === right) return nums[left]

    const mid = Math.floor((left + right) / 2)

    // 情况一：最大子数组在左半部分
    const leftMax = helper(left, mid)

    // 情况二：最大子数组在右半部分
    const rightMax = helper(mid + 1, right)

    // 情况三：最大子数组跨越中点
    // <- 从中点向左扩展，求最大和
    let leftSum = -Infinity
    let sum = 0
    for (let i = mid; i >= left; i--) {
      sum += nums[i]
      leftSum = Math.max(leftSum, sum)
    }

    // -> 从中点右边向右扩展，求最大和
    let rightSum = -Infinity
    sum = 0
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i]
      rightSum = Math.max(rightSum, sum)
    }

    const crossMax = leftSum + rightSum

    // 三种情况取最大值
    return Math.max(leftMax, rightMax, crossMax)
  }

  return helper(0, nums.length - 1)
}
