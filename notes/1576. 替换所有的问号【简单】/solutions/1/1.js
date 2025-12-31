/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const arr = s.split('')
  const n = arr.length
  const choices = ['a', 'b', 'c']

  for (let i = 0; i < n; i++) {
    if (arr[i] !== '?') continue

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
