/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (n) {
  n = Math.ceil(n / 25)
  if (n >= 200) return 1
  const memo = new Map()
  const dp = (a, b) => {
    if (a <= 0 && b <= 0) return 0.5
    if (a <= 0) return 1
    if (b <= 0) return 0
    const key = a * 201 + b
    if (memo.has(key)) return memo.get(key)
    const res =
      0.25 *
      (dp(a - 4, b) + dp(a - 3, b - 1) + dp(a - 2, b - 2) + dp(a - 1, b - 3))
    memo.set(key, res)
    return res
  }
  return dp(n, n)
}
