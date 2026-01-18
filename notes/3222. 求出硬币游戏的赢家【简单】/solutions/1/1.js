/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function (x, y) {
  // 每次操作需要 1 枚 75 分 + 4 枚 10 分 = 115 分
  // 最多能操作的次数
  const rounds = Math.min(x, Math.floor(y / 4))

  // 奇数轮 Alice 赢，偶数轮 Bob 赢
  return rounds % 2 === 1 ? 'Alice' : 'Bob'
}
