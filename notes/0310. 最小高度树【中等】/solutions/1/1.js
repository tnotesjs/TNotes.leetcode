/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0]
  const degree = new Array(n).fill(0)
  const graph = Array.from({ length: n }, () => [])
  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
    degree[a]++
    degree[b]++
  }
  let leaves = []
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) leaves.push(i)
  }
  let remaining = n
  while (remaining > 2) {
    remaining -= leaves.length
    const newLeaves = []
    for (const leaf of leaves) {
      for (const neighbor of graph[leaf]) {
        if (--degree[neighbor] === 1) newLeaves.push(neighbor)
      }
    }
    leaves = newLeaves
  }
  return leaves
}
