/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
  const n = security.length
  const dec = new Array(n).fill(0)
  const inc = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    if (security[i] <= security[i - 1]) dec[i] = dec[i - 1] + 1
  }
  for (let i = n - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) inc[i] = inc[i + 1] + 1
  }
  const ans = []
  for (let i = time; i < n - time; i++) {
    if (dec[i] >= time && inc[i] >= time) ans.push(i)
  }
  return ans
}
