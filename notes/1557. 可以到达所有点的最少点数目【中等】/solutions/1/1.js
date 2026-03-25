/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const hasIncoming = new Uint8Array(n)
  for (const [, v] of edges) hasIncoming[v] = 1
  const res = []
  for (let i = 0; i < n; i++) if (!hasIncoming[i]) res.push(i)
  return res
}
