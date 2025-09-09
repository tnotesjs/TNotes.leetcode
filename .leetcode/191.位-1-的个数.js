/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0

  // 处理 JS 中的负数情况
  n = n >>> 0

  // Brian Kernighan 算法
  while (n !== 0) {
    count++
    // 清除最右边的 1
    n &= n - 1
  }

  return count
}
// @lc code=end

// #region 1
/* 
方法一：逐位检查

时间复杂度：O(1)，固定循环32次
空间复杂度：O(1)

使用一个mask从最低位开始检查每一位
通过 n & mask 判断当前位是否为1
每次循环将mask左移一位，检查下一位
统计所有为1的位数

检查第1位(1)：1&1=1，count=1
检查第2位(0)：1&2=0，count=1
检查第3位(1)：1&4=0，count=1
检查第4位(1)：1&8=1，count=2
...
*/
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0
  let mask = 1

  for (let i = 0; i < 32; i++) {
    // 检查当前位是否为 1
    if ((n & mask) !== 0) {
      count++
    }
    // 将 mask 左移一位，检查下一位
    mask <<= 1
  }

  return count
}
// #endregion

// #region 2
/* 
方法二：Brian Kernighan 算法（更高效）

时间复杂度：O(k)，其中 k 是 1 的个数，最坏情况 O(1)
空间复杂度：O(1)

利用 n & (n-1) 的特性：这个操作会清除 n 中最右边的 1
每次操作都会减少一个 1，直到 n 变为 0
操作的次数就是 1 的个数

n = 1101, n-1 = 1100, n&(n-1) = 1100, count=1
n = 1100, n-1 = 1011, n&(n-1) = 1000, count=2
n = 1000, n-1 = 0111, n&(n-1) = 0000, count=3
n = 0000，结束循环
*/
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0

  // 处理 JS 中的负数情况
  n = n >>> 0

  // Brian Kernighan 算法
  while (n !== 0) {
    count++
    // 清除最右边的 1
    n &= n - 1
  }

  return count
}
// #endregion
