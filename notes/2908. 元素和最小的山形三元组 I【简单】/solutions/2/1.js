/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const n = nums.length

  // 预处理：计算每个位置左边的最小值
  const leftMin = new Array(n).fill(Infinity)
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1])
  }

  // 预处理：计算每个位置右边的最小值
  const rightMin = new Array(n).fill(Infinity)
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1])
  }

  let minSum = Infinity

  // 遍历所有可能的中间元素j
  for (let j = 1; j < n - 1; j++) {
    // 检查是否存在满足条件的i和k
    if (leftMin[j] < nums[j] && nums[j] > rightMin[j]) {
      const currentSum = leftMin[j] + nums[j] + rightMin[j]
      minSum = Math.min(minSum, currentSum)
    }
  }

  return minSum === Infinity ? -1 : minSum
}
