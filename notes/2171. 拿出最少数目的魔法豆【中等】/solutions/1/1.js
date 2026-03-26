/**
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  beans.sort((a, b) => a - b)
  const n = beans.length
  let total = 0
  for (const b of beans) total += b
  let res = Infinity
  for (let i = 0; i < n; i++) {
    // 以 beans[i] 为阈值，小于它的全部清除，大于它的减到 beans[i]
    // 剩余 = beans[i] * (n - i)
    const remaining = beans[i] * (n - i)
    res = Math.min(res, total - remaining)
  }
  return res
}
