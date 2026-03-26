/**
 * @param {string} hamsters
 * @return {number}
 */
var minimumBuckets = function (hamsters) {
  const s = hamsters.split('')
  const n = s.length
  let count = 0
  for (let i = 0; i < n; i++) {
    if (s[i] === 'H') {
      if (i > 0 && s[i - 1] === 'B') continue
      if (i + 1 < n && s[i + 1] === '.') {
        s[i + 1] = 'B'
        count++
      } else if (i > 0 && s[i - 1] === '.') {
        s[i - 1] = 'B'
        count++
      } else {
        return -1
      }
    }
  }
  return count
}
