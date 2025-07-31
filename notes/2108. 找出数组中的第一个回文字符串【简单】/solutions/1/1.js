/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  // 判断字符串是否为回文的辅助函数
  const isPalindrome = (str) => {
    let left = 0
    let right = str.length - 1

    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }

    return true
  }

  // 遍历数组查找第一个回文字符串
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i]
    }
  }

  return ''
}
