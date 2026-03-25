/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b)
  let count = 0
  for (const c of costs) {
    if (coins < c) break
    coins -= c
    count++
  }
  return count
}
