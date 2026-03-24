/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const res = []
  const dfs = (cur) => {
    if (cur > n) return
    res.push(cur)
    for (let i = 0; i <= 9; i++) dfs(cur * 10 + i)
  }
  for (let i = 1; i <= 9; i++) dfs(i)
  return res
}
