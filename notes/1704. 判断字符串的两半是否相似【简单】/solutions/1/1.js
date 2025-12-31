/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let cnt = 0
  const n = s.length
  const mid = n / 2

  for (let i = 0; i < mid; i++) {
    if (vowels.has(s[i])) cnt++
  }
  for (let i = mid; i < n; i++) {
    if (vowels.has(s[i])) cnt--
  }

  return cnt === 0
}
