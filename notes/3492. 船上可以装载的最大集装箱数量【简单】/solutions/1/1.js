/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
  // 甲板最多放 n * n 个集装箱
  const capacity = n * n
  // 按重量限制最多能放 maxWeight / w 个
  const byWeight = Math.floor(maxWeight / w)
  // 取两者的最小值
  return Math.min(capacity, byWeight)
}
