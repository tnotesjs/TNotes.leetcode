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

// 暴力递归：
// 注意：解法正确，但效率较低，提交后无法通过，会提示超时。
/* 
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}
*/
