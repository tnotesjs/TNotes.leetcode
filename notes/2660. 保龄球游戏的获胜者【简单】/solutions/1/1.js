/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  // 计算玩家得分
  const getScore = (player) => {
    let score = 0
    for (let i = 0; i < player.length; i++) {
      // 检查前两轮是否有击中10个瓶子
      const hasBonus =
        (i >= 1 && player[i - 1] === 10) || (i >= 2 && player[i - 2] === 10)
      score += hasBonus ? player[i] * 2 : player[i]
    }
    return score
  }

  const score1 = getScore(player1)
  const score2 = getScore(player2)

  if (score1 > score2) return 1
  if (score2 > score1) return 2
  return 0
}
