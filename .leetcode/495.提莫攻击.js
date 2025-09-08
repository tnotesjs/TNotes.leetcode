/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
// #region 暴力解法
// /**
//  * @param {number[]} timeSeries
//  * @param {number} duration
//  * @return {number}
//  */
// var findPoisonedDuration = function (timeSeries, duration) {
//   if (timeSeries.length === 0 || duration === 0) {
//     return 0
//   }

//   let totalDuration = 0

//   // 遍历攻击时间序列，计算每次攻击对中毒时间的贡献
//   for (let i = 0; i < timeSeries.length - 1; i++) {
//     // 计算相邻两次攻击的时间间隔
//     const gap = timeSeries[i + 1] - timeSeries[i]

//     // 如果间隔小于中毒持续时间，则只能贡献 gap 秒中毒时间
//     // 否则可以贡献完整的 duration 秒中毒时间
//     totalDuration += Math.min(gap, duration)
//   }

//   // 最后一次攻击总是能贡献完整的 duration 秒中毒时间
//   totalDuration += duration

//   return totalDuration
// }
// #endregion

// #region 使用 Set 记录中毒时间点
// !Time Limit Exceeded
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
// #endregion

// #region 区间合并法
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
// #endregion
// @lc code=end

findPoisonedDuration([1, 4], 2) // => 4
findPoisonedDuration([1, 2], 2) // => 3
