/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
}
// @lc code=end

// #region 1
/* 
动态规划
- **时间复杂度**：O(n)，需要计算从第 3 项到第 n 项
- **空间复杂度**：O(n)，新建数组存储中间计算结果
*/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  const dp = new Array(n + 1)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }

  return dp[n]
}

/* 
- **时间复杂度**：O(n)，需要计算从第 3 项到第 n 项
- **空间复杂度**：O(1)，只使用了常数级别的额外空间

优化思路：使用动态规划的思想，但通过滚动数组优化空间
1. **基础情况**：直接返回 T(0) = 0, T(1) = T(2) = 1
2. **滚动计算**：使用三个变量保存前三项的值
3. **迭代更新**：每次计算新值后，更新三个变量的值 */
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  // 处理基础情况
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  // 使用滚动数组优化空间复杂度
  let t_0 = 0 // T(0) -> Tn
  let t_1 = 1 // T(1) -> Tn+1
  let t_2 = 1 // T(2) -> Tn+2

  // 滚动计算 - 从第 3 项开始计算到第 n 项
  for (let i = 3; i <= n; i++) {
    const next = t_0 + t_1 + t_2
    t_0 = t_1
    t_1 = t_2
    t_2 = next
  }

  return t_2
}
// #endregion

// #region 2
/* 
递归解法
暴力递归
解法正确，但效率较低，提交后无法通过，会提示超时。
*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}

/* 
记忆化递归
*/
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
// #endregion
