/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const received = new Set() // 记录接到球的朋友
  let current = 0 // 当前持球者（0-indexed）
  let round = 1 // 当前轮数

  while (!received.has(current)) {
    received.add(current)
    current = (current + round * k) % n // 传球给下一个人
    round++
  }

  // 找出没有接到球的朋友
  const losers = []
  for (let i = 1; i <= n; i++) {
    if (!received.has(i - 1)) {
      losers.push(i)
    }
  }
  return losers
}
