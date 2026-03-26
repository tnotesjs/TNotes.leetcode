/**
 * @param {number[]} edges
 * @return {number[]}
 */
var countVisitedNodes = function (edges) {
  const n = edges.length
  const ans = new Array(n).fill(0)
  const inDeg = new Array(n).fill(0)
  for (const e of edges) inDeg[e]++
  // 拓扑排序，去除尾部节点
  const queue = []
  const visited = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) queue.push(i)
  }
  let head = 0
  while (head < queue.length) {
    const u = queue[head++]
    visited[u] = true
    if (--inDeg[edges[u]] === 0) queue.push(edges[u])
  }
  // 处理环上节点
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue
    let len = 0,
      u = i
    do {
      visited[u] = true
      u = edges[u]
      len++
    } while (u !== i)
    u = i
    do {
      ans[u] = len
      u = edges[u]
    } while (u !== i)
  }
  // 处理尾部节点（沿边走到已求解节点）
  for (let i = 0; i < n; i++) {
    if (ans[i] > 0) continue
    const path = []
    let u = i
    while (ans[u] === 0) {
      path.push(u)
      u = edges[u]
    }
    for (let j = path.length - 1; j >= 0; j--) {
      ans[path[j]] = ans[u] + (path.length - j)
    }
  }
  return ans
}
