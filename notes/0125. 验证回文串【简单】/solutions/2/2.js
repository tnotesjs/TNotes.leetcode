/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0
  let j = s.length - 1

  while (i < j) {
    // 跳过非字母数字字符
    while (i < j && !isAlphanumeric(s[i])) i++
    while (i < j && !isAlphanumeric(s[j])) j--

    // 比较字符
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false

    // 移动指针
    i++
    j--
  }

  return true
}

// 辅助函数，判断字符是否为字母或数字
function isAlphanumeric(char) {
  return /[a-zA-Z0-9]/.test(char)
}
