/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = []
  let i = 0

  // 添加所有在 newInterval 左侧不重叠的区间
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i++
  }

  // 合并所有与 newInterval 重叠的区间
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
    i++
  }
  result.push(newInterval)

  // 添加所有在 newInterval 右侧不重叠的区间
  while (i < intervals.length) {
    result.push(intervals[i])
    i++
  }

  return result
}
