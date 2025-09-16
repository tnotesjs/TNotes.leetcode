/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const n = score.length

  // 创建索引数组
  const indices = new Array(n)
  for (let i = 0; i < n; i++) {
    indices[i] = i
  }

  // 按照分数降序排序索引
  indices.sort((a, b) => score[b] - score[a])

  // 初始化结果数组
  const result = new Array(n)

  // 分配名次
  for (let i = 0; i < n; i++) {
    const index = indices[i]
    if (i === 0) {
      result[index] = 'Gold Medal'
    } else if (i === 1) {
      result[index] = 'Silver Medal'
    } else if (i === 2) {
      result[index] = 'Bronze Medal'
    } else {
      result[index] = (i + 1).toString()
    }
  }

  return result
}
// @lc code=end
