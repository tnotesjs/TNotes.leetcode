/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function (m, n, coordinates) {
  // 对每个黑色格子，找它参与的 2x2 块（最多 4 个）
  const map = new Map()
  for (const [x, y] of coordinates) {
    for (let dx = 0; dx <= 1; dx++) {
      for (let dy = 0; dy <= 1; dy++) {
        const r = x - dx,
          c = y - dy
        if (r >= 0 && r < m - 1 && c >= 0 && c < n - 1) {
          const key = r * n + c
          map.set(key, (map.get(key) || 0) + 1)
        }
      }
    }
  }
  const res = new Array(5).fill(0)
  for (const v of map.values()) res[v]++
  const total = (m - 1) * (n - 1)
  res[0] = total - res[1] - res[2] - res[3] - res[4]
  return res
}
