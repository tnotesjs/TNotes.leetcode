/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const total = chalk.reduce((a, b) => a + b, 0)
  k %= total
  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i
    k -= chalk[i]
  }
  return 0
}
