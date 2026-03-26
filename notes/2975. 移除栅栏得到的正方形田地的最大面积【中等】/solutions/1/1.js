var maximizeSquareArea = function (m, n, hFences, vFences) {
  const MOD = 1000000007n
  const getGaps = (fences, boundary) => {
    const pts = [1, ...fences, boundary].sort((a, b) => a - b)
    const gaps = new Set()
    for (let i = 0; i < pts.length; i++)
      for (let j = i + 1; j < pts.length; j++) gaps.add(pts[j] - pts[i])
    return gaps
  }
  const hGaps = getGaps(hFences, m)
  const vGaps = getGaps(vFences, n)
  let maxSide = -1
  for (const g of hGaps) if (vGaps.has(g) && g > maxSide) maxSide = g
  if (maxSide === -1) return -1
  return Number((BigInt(maxSide) * BigInt(maxSide)) % MOD)
}
