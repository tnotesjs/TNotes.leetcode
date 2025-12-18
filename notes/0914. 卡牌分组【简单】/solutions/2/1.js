/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  // 边界条件：至少需要 2 张牌才能分组
  if (deck.length < 2) return false

  // 计数每个数字的出现次数
  const cnt = new Map()
  for (const x of deck) cnt.set(x, (cnt.get(x) || 0) + 1)

  // 计算所有计数的最大公约数
  let g = 0
  for (const c of cnt.values()) {
    g = gcd(g, c)
    if (g === 1) return false // 剪枝：一旦公约数为 1，则无法分组
  }
  return g >= 2
}

// 欧几里得算法求最大公约数
function gcd(a, b) {
  while (b !== 0) {
    const t = a % b
    a = b
    b = t
  }
  return Math.abs(a)
}
