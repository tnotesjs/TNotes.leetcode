var minimumCost = function (s) {
  const n = s.length
  let cost = 0
  for (let i = 1; i < n; i++) {
    if (s[i] !== s[i - 1]) {
      cost += Math.min(i, n - i)
    }
  }
  return cost
}
