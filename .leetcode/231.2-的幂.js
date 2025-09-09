/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 2 的幂必须是正数，且二进制表示中只有一个 1
  // n & (n-1) 会清除 n 中最右边的 1
  // 如果 n 是 2 的幂，那么 n & (n-1) 必然等于 0
  return n > 0 && (n & (n - 1)) === 0
}
// @lc code=end

// #region 1
/* 
位运算技巧（最优解）

- 时间复杂度：O(1)
- 空间复杂度：O(1)
- 2 的幂必须是正数，且二进制表示中只有一个 1，把唯一的 1 干掉，结果必为 0。
- n & (n-1) 会清除 n 中最右边的 1，由于只有一个 1，执行完之后二进制表示中无 1，结果必为 0。
  - 示例：
  - n = 8 (1000)，n-1 = 7 (0111)，n & (n-1) = 0000 = 0
  - n = 6 (0110)，n-1 = 5 (0101)，n & (n-1) = 0100 ≠ 0
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //
  //
  // 如果 n 是 2 的幂，那么 n & (n-1) 应该等于 0
  return n > 0 && (n & (n - 1)) === 0
}
// #endregion

// #region 2
/* 
计算二进制中 1 的个数

- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 通过位运算逐位检查，统计二进制表示中 1 的个数。2 的幂必然是正数，且二进制表示中只有一个 1。
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false

  let count = 0
  while (n > 0) {
    if ((n & 1) === 1) count++
    n >>= 1
  }

  return count === 1
}
// #endregion

// #region 3
/* 
循环除法

- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 不断将 n 除以 2，如果最终结果是 1，则原数是 2 的幂。
*/
var isPowerOfTwo = function (n) {
  if (n <= 0) return false

  // 不断除以 2，直到不能整除为止
  while (n % 2 === 0) {
    n /= 2
  }

  // 如果最后结果是 1，说明原来是 2 的幂
  return n === 1
}
// #endregion

// #region 4
/* 
字符串方法

- 时间复杂度：O(log n)
- 空间复杂度：O(log n)
- 将数字转换为二进制字符串，然后统计其中 1 的个数。
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 2 的幂必须是正数，且二进制表示中只有一个 1
  if (n <= 0) return false

  // 使用内置函数计算二进制中 1 的个数
  return (n.toString(2).match(/1/g) || []).length === 1
}
// #endregion
