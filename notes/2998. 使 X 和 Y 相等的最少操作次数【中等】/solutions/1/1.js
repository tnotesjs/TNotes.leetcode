/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minimumOperationsToMakeEqual = function (x, y) {
  if (x <= y) return y - x
  const memo = new Map()

  function dfs(val) {
    if (val <= y) return y - val
    if (memo.has(val)) return memo.get(val)
    // 逐步减 1 到 y
    let res = val - y
    // 先减到 5 的倍数再除6，或先加到 5 的倍数再除
    res = Math.min(res, (val % 5) + 1 + dfs(Math.floor(val / 5)))
    res = Math.min(res, 5 - (val % 5) + 1 + dfs(Math.floor(val / 5) + 1))
    // 同理处理 11
    res = Math.min(res, (val % 11) + 1 + dfs(Math.floor(val / 11)))
    res = Math.min(res, 11 - (val % 11) + 1 + dfs(Math.floor(val / 11) + 1))
    memo.set(val, res)
    return res
  }

  return dfs(x)
}
