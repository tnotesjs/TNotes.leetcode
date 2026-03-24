/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const sum = matchsticks.reduce((a, b) => a + b, 0)
  if (sum % 4 !== 0) return false
  const side = sum / 4
  matchsticks.sort((a, b) => b - a) // 降序加速剪枝
  const sides = [0, 0, 0, 0]
  const dfs = (idx) => {
    if (idx === matchsticks.length) return sides.every((s) => s === side)
    for (let i = 0; i < 4; i++) {
      if (sides[i] + matchsticks[idx] > side) continue
      if (i > 0 && sides[i] === sides[i - 1]) continue // 去重剪枝
      sides[i] += matchsticks[idx]
      if (dfs(idx + 1)) return true
      sides[i] -= matchsticks[idx]
    }
    return false
  }
  return dfs(0)
}
