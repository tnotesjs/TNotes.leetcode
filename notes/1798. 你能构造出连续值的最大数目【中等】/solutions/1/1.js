/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  coins.sort((a, b) => a - b)
  let reach = 0 // 当前可构造 [0, reach]
  for (const c of coins) {
    if (c > reach + 1) break
    reach += c
  }
  return reach + 1
}
