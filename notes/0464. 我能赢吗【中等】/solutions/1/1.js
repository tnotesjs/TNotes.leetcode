/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal)
    return false
  if (desiredTotal <= 0) return true
  const memo = new Map()
  const dfs = (used, remain) => {
    if (memo.has(used)) return memo.get(used)
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (used & (1 << i)) continue
      if (i >= remain || !dfs(used | (1 << i), remain - i)) {
        memo.set(used, true)
        return true
      }
    }
    memo.set(used, false)
    return false
  }
  return dfs(0, desiredTotal)
}
