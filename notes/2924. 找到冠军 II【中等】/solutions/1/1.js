/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
  const inDeg = new Array(n).fill(0)
  for (const [u, v] of edges) {
    inDeg[v]++
  }
  let champion = -1
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) {
      if (champion !== -1) return -1
      champion = i
    }
  }
  return champion
}
