/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const res = []
  const n = graph.length
  const dfs = (node, path) => {
    if (node === n - 1) {
      res.push([...path])
      return
    }
    for (const next of graph[node]) {
      path.push(next)
      dfs(next, path)
      path.pop()
    }
  }
  dfs(0, [0])
  return res
}
