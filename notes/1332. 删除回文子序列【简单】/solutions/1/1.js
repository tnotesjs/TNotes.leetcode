/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {}

// 若原串本身为回文，一次删完；否则答案必为 2（先删全 a 再删全 b）
var removePalindromeSub = function (s) {
  if (s.length === 0) return 0
  if (isPalindrome(s)) return 1
  return 2
}

function isPalindrome(str) {
  let l = 0
  let r = str.length - 1
  while (l < r) {
    if (str[l] !== str[r]) return false
    l++
    r--
  }
  return true
}
