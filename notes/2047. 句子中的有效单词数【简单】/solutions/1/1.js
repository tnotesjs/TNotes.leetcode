/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  const tokens = sentence.trim().split(/\s+/)
  let ans = 0

  const isValid = (t) => {
    let hyphen = 0
    let punct = 0

    for (let i = 0; i < t.length; i += 1) {
      const ch = t[i]
      if (ch >= '0' && ch <= '9') return false

      if (ch === '-') {
        hyphen += 1
        if (hyphen > 1) return false
        if (i === 0 || i === t.length - 1) return false
        if (
          !(
            t[i - 1] >= 'a' &&
            t[i - 1] <= 'z' &&
            t[i + 1] >= 'a' &&
            t[i + 1] <= 'z'
          )
        )
          return false
        continue
      }

      if (ch === '!' || ch === '.' || ch === ',') {
        punct += 1
        if (punct > 1) return false
        if (i !== t.length - 1) return false
        continue
      }

      if (ch >= 'a' && ch <= 'z') continue
      return false
    }

    return true
  }

  for (const t of tokens) {
    if (t.length === 0) continue
    if (isValid(t)) ans += 1
  }

  return ans
}
