/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
  const n = nums.length
  const result = new Array(n)

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      result[i] = nums[i]
    } else {
      // 计算目标下标，处理循环数组
      // 使用 ((i + nums[i]) % n + n) % n 处理负数情况
      const targetIdx = (((i + nums[i]) % n) + n) % n
      result[i] = nums[targetIdx]
    }
  }

  return result
}
