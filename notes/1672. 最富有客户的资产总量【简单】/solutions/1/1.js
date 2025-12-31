/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let ans = 0

  for (const row of accounts) {
    let sum = 0
    for (const v of row) sum += v
    if (sum > ans) ans = sum
  }

  return ans
}
