/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const count = (x, p) => {
    let c = 0
    while (x % p === 0) {
      c++
      x /= p
    }
    return c
  }
  // f2[i][j], f5[i][j]
  const f2 = Array.from({ length: m }, (_, i) =>
    grid[i].map((v) => count(v, 2)),
  )
  const f5 = Array.from({ length: m }, (_, i) =>
    grid[i].map((v) => count(v, 5)),
  )
  // 左前缀和、上前缀和
  const left2 = Array.from({ length: m }, () => new Array(n + 1).fill(0))
  const left5 = Array.from({ length: m }, () => new Array(n + 1).fill(0))
  const top2 = Array.from({ length: m + 1 }, () => new Array(n).fill(0))
  const top5 = Array.from({ length: m + 1 }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      left2[i][j + 1] = left2[i][j] + f2[i][j]
      left5[i][j + 1] = left5[i][j] + f5[i][j]
    }
  }
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      top2[i + 1][j] = top2[i][j] + f2[i][j]
      top5[i + 1][j] = top5[i][j] + f5[i][j]
    }
  }
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const c2 = f2[i][j],
        c5 = f5[i][j]
      const l2 = left2[i][j],
        l5 = left5[i][j]
      const r2 = left2[i][n] - left2[i][j + 1],
        r5 = left5[i][n] - left5[i][j + 1]
      const u2 = top2[i][j],
        u5 = top5[i][j]
      const d2 = top2[m][j] - top2[i + 1][j],
        d5 = top5[m][j] - top5[i + 1][j]
      // 4 种 L 形
      ans = Math.max(
        ans,
        Math.min(l2 + u2 + c2, l5 + u5 + c5),
        Math.min(l2 + d2 + c2, l5 + d5 + c5),
        Math.min(r2 + u2 + c2, r5 + u5 + c5),
        Math.min(r2 + d2 + c2, r5 + d5 + c5),
      )
    }
  }
  return ans
}
