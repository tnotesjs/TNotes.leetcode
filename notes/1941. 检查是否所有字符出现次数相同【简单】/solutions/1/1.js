/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const cnt = new Array(26).fill(0)

  for (let i = 0; i < s.length; i += 1) {
    cnt[s.charCodeAt(i) - 97] += 1
  }

  let target = 0
  for (const c of cnt) {
    if (c === 0) continue
    if (target === 0) target = c
    else if (c !== target) return false
  }

  return true
}
