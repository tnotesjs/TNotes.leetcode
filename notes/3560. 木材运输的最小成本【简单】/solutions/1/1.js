/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function (n, m, k) {
  let cost = 0

  // 计算单根木材的切割成本
  const getCost = (len) => {
    if (len <= k) return 0
    // 将长度为 len 的木材切成 k 和 (len - k)
    return k * (len - k)
  }

  cost += getCost(n)
  cost += getCost(m)

  return cost
}
