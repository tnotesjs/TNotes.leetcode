/*
 * @lc app=leetcode.cn id=2299 lang=javascript
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  // 条件1: 长度至少为8
  if (password.length < 8) {
    return false
  }

  // 条件6: 不包含两个连续相同的字符
  if (/(.)\1/.test(password)) {
    return false
  }

  // 条件2-5: 检查是否包含所有必需的字符类型
  const hasLower = /[a-z]/.test(password) // 小写字母
  const hasUpper = /[A-Z]/.test(password) // 大写字母
  const hasDigit = /[0-9]/.test(password) // 数字
  const hasSpecial = /[!@#$%^&*()\-+]/.test(password) // 特殊字符

  return hasLower && hasUpper && hasDigit && hasSpecial
}
// @lc code=end
