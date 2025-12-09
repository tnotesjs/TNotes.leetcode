/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 字符串预处理：
  // 1. 将所有字母统一转为小写
  // 2. 替换掉所有非法字符：空白字符、非字母字符、非数字字符
  s = s.toLowerCase().replace(/[^a-z0-9]|\s/g, '')
  // 翻转比较：
  // 3. 字符串逆置
  // 4. 返回比较原字符串和逆置后的字符串的结果
  return s === [...s].reverse().join('')
}
