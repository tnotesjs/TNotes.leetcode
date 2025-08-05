// 循环校验
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  // 条件1: 长度至少为8
  if (password.length < 8) {
    return false
  }

  // 定义字符类型检查的标志
  let hasLower = false
  let hasUpper = false
  let hasDigit = false
  let hasSpecial = false

  // 特殊字符集合
  const specialChars = new Set('!@#$%^&*()-+')

  // 遍历密码检查各个条件
  for (let i = 0; i < password.length; i++) {
    const char = password[i]

    // 条件6: 不包含两个连续相同的字符
    if (i > 0 && char === password[i - 1]) {
      return false
    }

    // 条件2-5: 检查是否包含所有必需的字符类型
    if (char >= 'a' && char <= 'z') {
      hasLower = true
    } else if (char >= 'A' && char <= 'Z') {
      hasUpper = true
    } else if (char >= '0' && char <= '9') {
      hasDigit = true
    } else if (specialChars.has(char)) {
      hasSpecial = true
    }
  }

  return hasLower && hasUpper && hasDigit && hasSpecial
}
