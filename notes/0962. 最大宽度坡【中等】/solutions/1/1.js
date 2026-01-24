/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const n = nums.length
  const stack = [] // 单调递减栈，存储索引

  // 从左向右构建递减栈，存储所有可能的左端点
  for (let i = 0; i < n; i++) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i)
    }
  }

  let maxWidth = 0

  // 从右向左扫描，找最大宽度
  for (let j = n - 1; j >= 0; j--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
      maxWidth = Math.max(maxWidth, j - stack.pop())
    }
  }

  return maxWidth
}
