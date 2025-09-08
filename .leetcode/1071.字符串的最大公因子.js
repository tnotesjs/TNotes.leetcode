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
