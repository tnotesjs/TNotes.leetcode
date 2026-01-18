/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  // 检查是否是同花（所有花色相同）
  if (suits.every((suit) => suit === suits[0])) {
    return 'Flush'
  }

  // 统计每个点数的出现次数
  const rankCount = new Map()
  for (const rank of ranks) {
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1)
  }

  // 检查是否有三条或对子
  for (const count of rankCount.values()) {
    if (count >= 3) {
      return 'Three of a Kind'
    }
  }

  for (const count of rankCount.values()) {
    if (count >= 2) {
      return 'Pair'
    }
  }

  return 'High Card'
}
