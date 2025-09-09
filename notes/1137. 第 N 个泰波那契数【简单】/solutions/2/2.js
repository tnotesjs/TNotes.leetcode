/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const memo = {}

  function helper(n) {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    if (memo[n] !== undefined) return memo[n]

    memo[n] = helper(n - 1) + helper(n - 2) + helper(n - 3)
    return memo[n]
  }

  return helper(n)
}
