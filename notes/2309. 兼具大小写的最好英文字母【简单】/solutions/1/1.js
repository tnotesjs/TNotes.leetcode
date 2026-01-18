/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const set = new Set(s)

  // 从 Z 到 A 倒序遍历，找到第一个大小写都存在的字母
  for (let i = 25; i >= 0; i--) {
    const upper = String.fromCharCode(65 + i) // A-Z
    const lower = String.fromCharCode(97 + i) // a-z

    if (set.has(upper) && set.has(lower)) {
      return upper
    }
  }

  return ''
}
