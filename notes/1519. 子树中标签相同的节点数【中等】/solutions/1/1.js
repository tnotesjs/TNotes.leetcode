/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }
  const res = new Array(n).fill(0)
  const dfs = (node, parent) => {
    const cnt = new Array(26).fill(0)
    cnt[labels.charCodeAt(node) - 97] = 1
    for (const child of adj[node]) {
      if (child === parent) continue
      const childCnt = dfs(child, node)
      for (let i = 0; i < 26; i++) cnt[i] += childCnt[i]
    }
    res[node] = cnt[labels.charCodeAt(node) - 97]
    return cnt
  }
  dfs(0, -1)
  return res
}
