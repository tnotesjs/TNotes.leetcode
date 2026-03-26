var minCost = function (nums, x) {
  const n = nums.length
  const minC = [...nums]
  let res = minC.reduce((a, b) => a + b, 0)
  for (let k = 1; k < n; k++) {
    for (let i = 0; i < n; i++) {
      minC[i] = Math.min(minC[i], nums[(i + k) % n])
    }
    res = Math.min(res, k * x + minC.reduce((a, b) => a + b, 0))
  }
  return res
}
