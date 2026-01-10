/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const count = new Map()
  let result = 0

  for (const [a, b] of dominoes) {
    // 标准化多米诺骨牌表示（较小的数字在前）
    const key = a <= b ? `${a},${b}` : `${b},${a}`

    // 计算当前等价类的对数
    const currentCount = count.get(key) || 0
    result += currentCount // 每新增一个，能与之前的所有组成对
    count.set(key, currentCount + 1)
  }

  return result
}
