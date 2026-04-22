/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const n = s.length

  if (n < 2) return s

  const reversed = s.split('').reverse().join('')
  const combined = s + '#' + reversed
  const lps = new Array(combined.length).fill(0)

  for (let i = 1; i < combined.length; i++) {
    let j = lps[i - 1]

    while (j > 0 && combined[i] !== combined[j]) j = lps[j - 1]
    if (combined[i] === combined[j]) j++

    lps[i] = j
  }

  const longestPrefixLength = lps[combined.length - 1]
  return s.slice(longestPrefixLength).split('').reverse().join('') + s
}
