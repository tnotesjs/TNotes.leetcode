/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 构建前缀和数组，prefixSum[i] 表示前 i 个元素的和
  this.prefixSum = new Array(nums.length + 1).fill(0)

  // 计算前缀和
  for (let i = 0; i < nums.length; i++) {
    this.prefixSum[i + 1] = this.prefixSum[i] + nums[i]
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // 利用前缀和快速计算区间和
  // 区间 [left, right] 的和 = prefixSum[right+1] - prefixSum[left]
  return this.prefixSum[right + 1] - this.prefixSum[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
