/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  const n = bombs.length
  // 建图：如果 bomb[i] 能引爆 bomb[j]，则有一条有向边 i -> j
  const adj = Array.from({ length: n }, () => [])
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue
      const dx = bombs[i][0] - bombs[j][0]
      const dy = bombs[i][1] - bombs[j][1]
      const r = bombs[i][2]
      if (dx * dx + dy * dy <= r * r) adj[i].push(j)
    }
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    // BFS
    const visited = new Uint8Array(n)
    visited[i] = 1
    const queue = [i]
    let cnt = 1
    for (let f = 0; f < queue.length; f++) {
      for (const next of adj[queue[f]]) {
        if (!visited[next]) {
          visited[next] = 1
          cnt++
          queue.push(next)
        }
      }
    }
    ans = Math.max(ans, cnt)
  }
  return ans
}
