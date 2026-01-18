/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  const positiveSet = new Set()
  let sum = 0

  // 找出所有不同的正数并求和
  for (const num of nums) {
    if (num > 0 && !positiveSet.has(num)) {
      positiveSet.add(num)
      sum += num
    }
  }

  // 如果有正数，返回所有不同正数的和
  if (sum > 0) return sum

  // 如果没有正数，返回数组中的最大值
  return Math.max(...nums)
}
