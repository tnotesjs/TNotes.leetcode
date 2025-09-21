/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  // 移除所有破折号并将字母转为大写
  let cleaned = s.replace(/-/g, '').toUpperCase()

  let result = ''

  // 从右向左每k个字符分组
  for (let i = cleaned.length - 1; i >= 0; i--) {
    // 每k个字符添加一个破折号（除了最左边）
    if (result.length % (k + 1) === k) {
      result = '-' + result
    }
    result = cleaned[i] + result
  }

  return result
}
