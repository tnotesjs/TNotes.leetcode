/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function (x, target) {
  // cost(k) = 一个 x^k 项的代价（含前导连接符）
  // k=0: x/x 需要 2 个符号（/ 和前导 +/-）
  // k>=1: x^k 需要 k 个符号（k-1 个 * 和 1 个前导 +/-）
  const cost = (k) => (k === 0 ? 2 : k)

  // pos: 正向构建当前值的最小代价
  // neg: 借位构建当前值的最小代价（需要向高位借一个 x^(k+1)）
  let pos = 0,
    neg = 0
  let k = 0

  while (target > 0) {
    const d = target % x
    target = Math.floor(target / x)

    if (k === 0) {
      // 第一位
      pos = d * cost(0) // 用 d 个 x/x
      neg = (x - d) * cost(0) // 借位：用 (x-d) 个 x/x 表示负项
    } else {
      const c = cost(k)
      const newPos = Math.min(
        pos + d * c, // 不借位：前面正向 + d 个 x^k
        neg + (d + 1) * c, // 前面借位：需要 d+1 个 x^k 来补偿
      )
      const newNeg = Math.min(
        pos + (x - d) * c, // 开始借位：正向 + (x-d) 个负项 x^k
        neg + (x - d - 1) * c, // 连续借位：已借位 + (x-d-1) 个负项
      )
      pos = newPos
      neg = newNeg
    }
    k++
  }

  // 如果有借位，需要补上最高位的 x^k
  return Math.min(pos, neg + cost(k)) - 1 // -1 去掉第一项的前导连接符
}
