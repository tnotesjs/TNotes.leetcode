/**
 * @param {number[][]} values
 * @return {number}
 */
var maxSpending = function(values) {
  const all = []
  for (const row of values) {
    for (const v of row) all.push(v)
  }
  all.sort((a, b) => a - b)
  let ans = 0
  for (let d = 1; d <= all.length; d++) {
    ans += all[d - 1] * d
  }
  return ans
}
