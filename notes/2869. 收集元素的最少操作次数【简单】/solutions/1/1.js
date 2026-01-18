/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const collected = new Set()
  let operations = 0

  // 从数组末尾开始遍历
  for (let i = nums.length - 1; i >= 0; i--) {
    operations++
    const num = nums[i]

    // 只收集 1 到 k 的元素
    if (num >= 1 && num <= k) {
      collected.add(num)
    }

    // 检查是否已经收集到所有元素 1 到 k
    if (collected.size === k) {
      return operations
    }
  }

  return operations
}
