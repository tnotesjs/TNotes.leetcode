/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = []
  let j = 0
  for (let i = 1; i <= n && j < target.length; i++) {
    res.push('Push')
    if (target[j] === i) {
      j++
    } else {
      res.push('Pop')
    }
  }
  return res
}
