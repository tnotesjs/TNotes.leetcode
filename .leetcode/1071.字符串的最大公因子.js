/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // 如果 str1 + str2 不等于 str2 + str1，则不存在公共因子
  if (str1 + str2 !== str2 + str1) {
    return ''
  }

  // 计算两个字符串长度的最大公约数
  const gcdLength = gcd(str1.length, str2.length)

  // 返回长度为最大公约数的前缀
  return str1.substring(0, gcdLength)
}

// 计算两个数的最大公约数（欧几里得算法）
function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}
// @lc code=end

// #region 1
/* 
- **时间复杂度**：O(m + n + log(min(m, n)))
  - 字符串拼接比较：O(m + n)
  - 计算最大公约数：O(log(min(m, n)))
- **空间复杂度**：O(m + n)，用于存储拼接后的字符串

这个解法基于以下数学原理：
1. 如果字符串x能除尽字符串s，那么s是x的重复
2. 如果字符串x能同时除尽str1和str2，那么str1和str2都由x重复构成
3. 因此，str1 + str2 = str2 + str1
4. 最大公共因子的长度等于两个字符串长度的最大公约数 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // 如果 str1 + str2 不等于 str2 + str1，则不存在公共因子
  if (str1 + str2 !== str2 + str1) {
    return ''
  }

  // 计算两个字符串长度的最大公约数
  const gcdLength = gcd(str1.length, str2.length)

  // 返回长度为最大公约数的前缀
  return str1.substring(0, gcdLength)
}

// 计算两个数的最大公约数（欧几里得算法）
function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}
// #endregion
