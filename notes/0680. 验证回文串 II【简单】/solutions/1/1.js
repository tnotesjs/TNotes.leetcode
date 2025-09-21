/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  // 判断子串是否为回文串的辅助函数
  const isPalindrome = (str, start, end) => {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false
      }
      start++
      end--
    }
    return true
  }

  while (left < right) {
    if (s[left] !== s[right]) {
      // 当遇到不匹配的字符时，尝试删除左边或右边的字符
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      )
    }
    left++
    right--
  }

  // 如果没有遇到不匹配的字符，本身就是回文串
  return true
}
