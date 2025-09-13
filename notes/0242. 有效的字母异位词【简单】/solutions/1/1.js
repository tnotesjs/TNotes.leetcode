/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 长度不同直接返回 false
  if (s.length !== t.length) return false

  // 对两个字符串排序后比较
  return s.split('').sort().join('') === t.split('').sort().join('')
}
