/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const children = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    children[u].push(v)
    children[v].push(u)
  }
  const dfs = (node, parent) => {
    let time = 0
    for (const child of children[node]) {
      if (child === parent) continue
      const childTime = dfs(child, node)
      if (childTime > 0 || hasApple[child]) time += childTime + 2
    }
    return time
  }
  return dfs(0, -1)
}
