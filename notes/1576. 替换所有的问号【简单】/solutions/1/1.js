/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const arr = s.split('')
  const n = arr.length

  // 任意准备 3 各不同的小写字母
  const choices = ['a', 'b', 'c']

  for (let i = 0; i < n; i++) {
    if (arr[i] !== '?') continue

    // 用 choices 替换 ?
    // 确保 ch 和 ? 前后的字符都不相同
    for (const ch of choices) {
      const prev = i > 0 ? arr[i - 1] : ''
      const next = i + 1 < n ? arr[i + 1] : ''
      if (ch !== prev && ch !== next) {
        arr[i] = ch
        break
      }
    }
  }

  return arr.join('')
}
