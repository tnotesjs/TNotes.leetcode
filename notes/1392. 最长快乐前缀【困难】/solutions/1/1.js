/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  const n = s.length
  const lps = new Array(n).fill(0)

  for (let i = 1; i < n; i++) {
    let j = lps[i - 1]

    while (j > 0 && s[i] !== s[j]) j = lps[j - 1]
    if (s[i] === s[j]) j++

    lps[i] = j
  }

  return s.slice(0, lps[n - 1])
}
