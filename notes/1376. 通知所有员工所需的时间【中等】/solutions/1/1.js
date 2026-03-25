/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const children = Array.from({ length: n }, () => [])
  for (let i = 0; i < n; i++) {
    if (manager[i] !== -1) children[manager[i]].push(i)
  }
  const dfs = (node) => {
    let maxTime = 0
    for (const child of children[node]) {
      maxTime = Math.max(maxTime, dfs(child))
    }
    return informTime[node] + maxTime
  }
  return dfs(headID)
}
