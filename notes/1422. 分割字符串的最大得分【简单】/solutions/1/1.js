/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  // 预先统计右侧 1 的总数
  let onesRight = 0
  for (const ch of s) if (ch === '1') onesRight++

  let zerosLeft = 0
  let best = 0
  // 分割点在 [0, n-2]，保证右侧非空
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') zerosLeft++
    else onesRight-- // 这个 1 被划到左边，右侧 1 减少
    best = Math.max(best, zerosLeft + onesRight)
  }
  return best
}
