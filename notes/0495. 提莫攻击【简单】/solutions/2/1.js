/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0 || duration === 0) {
    return 0
  }

  // 使用 Set 记录所有中毒的时间点
  const poisonedTimes = new Set()

  // 遍历每次攻击
  for (const attackTime of timeSeries) {
    // 将这次攻击导致的中毒时间点加入 Set
    for (let i = 0; i < duration; i++) {
      poisonedTimes.add(attackTime + i)
    }
  }

  return poisonedTimes.size
}
