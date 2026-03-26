var goodSubsetofBinaryMatrix = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const maskToRow = new Map()
  for (let i = 0; i < m; i++) {
    let mask = 0
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) mask |= 1 << j
    }
    if (mask === 0) return [i]
    if (!maskToRow.has(mask)) maskToRow.set(mask, i)
  }
  for (const [m1, r1] of maskToRow) {
    for (const [m2, r2] of maskToRow) {
      if (r1 < r2 && (m1 & m2) === 0) return [r1, r2]
    }
  }
  return []
}
