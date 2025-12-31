/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let ans = 0

  for (let c = 5; c <= n; c += 1) {
    const c2 = c * c
    for (let b = 4; b < c; b += 1) {
      const diff = c2 - b * b
      if (diff <= 0) continue
      const a = Math.trunc(Math.sqrt(diff))
      if (a * a === diff && a <= n) ans += 1
    }
  }

  return ans
}
