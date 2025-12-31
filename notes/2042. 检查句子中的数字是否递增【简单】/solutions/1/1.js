/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let prev = 0
  const tokens = s.split(' ')

  for (const t of tokens) {
    const code = t.charCodeAt(0)
    if (code >= 48 && code <= 57) {
      const val = Number(t)
      if (val <= prev) return false
      prev = val
    }
  }

  return true
}
