/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  const res = []
  let lo = 1,
    hi = n
  for (let i = 0; i < n; i++) {
    if (k > 1) {
      if (k % 2 === 1) res.push(lo++)
      else res.push(hi--)
      k--
    } else {
      res.push(lo++)
    }
  }
  return res
}
