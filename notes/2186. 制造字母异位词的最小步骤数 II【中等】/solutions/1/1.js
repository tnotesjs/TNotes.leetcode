/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  for (const c of t) freq[c.charCodeAt(0) - 97]--
  let res = 0
  for (const f of freq) {
    if (f > 0) res += f
  }
  return res
}
