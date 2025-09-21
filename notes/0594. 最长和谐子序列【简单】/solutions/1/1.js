/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  // 统计每个数字出现的次数
  const countMap = new Map()
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }

  let maxLength = 0

  // 检查每个数字及其相邻数字
  for (const [num, count] of countMap) {
    // 如果 num+1 存在，则可以组成和谐子序列
    if (countMap.has(num + 1)) {
      maxLength = Math.max(maxLength, count + countMap.get(num + 1))
    }
  }

  return maxLength
}
