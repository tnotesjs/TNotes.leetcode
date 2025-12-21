/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {
  // cnt[i][j] 表示玩家 i 获得颜色 j 的球的数量
  const cnt = Array.from({ length: n }, () => Array(11).fill(0))

  for (const [player, color] of pick) {
    cnt[player][color]++
  }

  let winners = 0
  for (let i = 0; i < n; i++) {
    // 玩家 i 需要某种颜色的球数量 > i
    for (let j = 0; j <= 10; j++) {
      if (cnt[i][j] > i) {
        winners++
        break
      }
    }
  }

  return winners
}
