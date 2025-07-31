/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0 || duration === 0) {
    return 0
  }

  const intervals = [] // 存储所有中毒区间，不考虑是否重叠。
  for (const attackTime of timeSeries) {
    intervals.push([attackTime, attackTime + duration - 1])
  }

  const merged = [intervals[0]] // 存储所有去除重叠区间后的中毒区间。

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1]
    const current = intervals[i]

    // 如果当前区间与上一个区间重叠，则合并
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1])
    } else {
      // 否则添加新区间
      merged.push(current)
    }
  }

  // 计算总中毒时间
  let total = 0
  for (const [start, end] of merged) {
    total += end - start + 1
  }

  return total
}
