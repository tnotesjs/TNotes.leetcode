/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length
  const rg = Array.from({ length: n }, () => [])
  const outDeg = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    for (const j of graph[i]) rg[j].push(i)
    outDeg[i] = graph[i].length
  }
  const queue = []
  for (let i = 0; i < n; i++) if (outDeg[i] === 0) queue.push(i)
  const safe = new Array(n).fill(false)
  while (queue.length) {
    const u = queue.shift()
    safe[u] = true
    for (const v of rg[u]) {
      if (--outDeg[v] === 0) queue.push(v)
    }
  }
  const res = []
  for (let i = 0; i < n; i++) if (safe[i]) res.push(i)
  return res
}
