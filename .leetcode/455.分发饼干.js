/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let count = 0 // 满足的胃的总量

  // 升序排序
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)

  let i = 0,
    j = 0

  for (; i < g.length; i++) {
    for (; j < s.length; j++) {
      // 从最小的胃开始满足，用尽可能小的饼干。
      if (s[j] >= g[i]) {
        count++ // 表示满足了一个胃
        j++ // 表示这个饼干被吃了
        break
      }
    }
  }
  return count
}
// @lc code=end

findContentChildren([1, 2, 3], [1, 1])
