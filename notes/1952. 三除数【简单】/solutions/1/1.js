/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  // 检查是否为完全平方数
  const root = Math.floor(Math.sqrt(n))
  if (root * root !== n) return false

  // 检查平方根是否为质数
  for (let d = 2; d * d <= root; d += 1) {
    if (root % d === 0) return false
  }

  return root > 1
}
