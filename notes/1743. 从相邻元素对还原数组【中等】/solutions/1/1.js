/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
  const adj = new Map()
  for (const [u, v] of adjacentPairs) {
    if (!adj.has(u)) adj.set(u, [])
    if (!adj.has(v)) adj.set(v, [])
    adj.get(u).push(v)
    adj.get(v).push(u)
  }
  let start
  for (const [k, v] of adj) {
    if (v.length === 1) {
      start = k
      break
    }
  }
  const n = adjacentPairs.length + 1
  const res = [start]
  const visited = new Set([start])
  for (let i = 1; i < n; i++) {
    for (const next of adj.get(res[i - 1])) {
      if (!visited.has(next)) {
        res.push(next)
        visited.add(next)
        break
      }
    }
  }
  return res
}
