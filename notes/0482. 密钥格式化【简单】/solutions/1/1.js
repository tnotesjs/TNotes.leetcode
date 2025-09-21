/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  // 移除所有破折号并将字母转为大写
  let cleaned = s.replace(/-/g, '').toUpperCase()

  // 如果处理后的字符串为空，返回空字符串
  if (cleaned.length === 0) {
    return ''
  }

  let result = []
  let firstGroupLength = cleaned.length % k

  // 处理第一组（长度可能小于k）
  if (firstGroupLength > 0) {
    result.push(cleaned.substring(0, firstGroupLength))
  }

  // 处理后续每组（每组k个字符）
  for (let i = firstGroupLength; i < cleaned.length; i += k) {
    result.push(cleaned.substring(i, i + k))
  }

  // 用破折号连接各组
  return result.join('-')
}
