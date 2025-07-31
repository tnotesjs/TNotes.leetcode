var missingNumber = function (nums) {
  const n = nums.length
  // 计算 [0, n] 的完整序列和
  const expectedSum = (n * (n + 1)) / 2

  // 计算数组中实际元素的和
  const actualSum = nums.reduce((sum, num) => sum + num, 0)

  // 差值就是丢失的数字
  return expectedSum - actualSum
}
