/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0 || duration === 0) {
    return 0
  }

  let totalDuration = 0

  // 遍历攻击时间序列，计算每次攻击对中毒时间的贡献
  for (let i = 0; i < timeSeries.length - 1; i++) {
    // 计算相邻两次攻击的时间间隔
    const gap = timeSeries[i + 1] - timeSeries[i]

    // 如果间隔小于中毒持续时间，则只能贡献gap秒中毒时间
    // 否则可以贡献完整的duration秒中毒时间
    totalDuration += Math.min(gap, duration)
  }

  // 最后一次攻击总是能贡献完整的duration秒中毒时间
  totalDuration += duration

  return totalDuration
}
