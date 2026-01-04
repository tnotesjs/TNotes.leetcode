/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // 假设从头部位置砍一刀，预先统计所有 1 的总数
  let onesRight = 0
  for (const ch of s) if (ch === '1') onesRight++

  let zerosLeft = 0
  let best = 0
  // 分割点在 [0, n-2]，保证右侧非空
  for (let i = 0; i < s.length - 1; i++) {
    // 扫到 0 - 这个 0 被划到左边，左侧 0 增加
    if (s[i] === '0') zerosLeft++
    // 扫到 1 - 这个 1 被划到左边，右侧 1 减少
    else onesRight--
    best = Math.max(best, zerosLeft + onesRight)
  }
  return best
}
