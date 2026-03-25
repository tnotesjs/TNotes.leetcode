/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const m = grid1.length,
    n = grid1[0].length
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) return true
    grid2[i][j] = 0
    let res = grid1[i][j] === 1
    // 全部方向都要搜索完，不能提前返回
    res = dfs(i + 1, j) && res
    res = dfs(i - 1, j) && res
    res = dfs(i, j + 1) && res
    res = dfs(i, j - 1) && res
    return res
  }
  let count = 0
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (grid2[i][j] === 1 && dfs(i, j)) count++
  return count
}
