/**
 * @param {string} s
 * @param {number} k
 * @param {string} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const res = []
  for (let i = 0; i < s.length; i += k) {
    let part = s.slice(i, i + k)
    if (part.length < k) {
      part = part.padEnd(k, fill)
    }
    res.push(part)
  }
  return res
}
