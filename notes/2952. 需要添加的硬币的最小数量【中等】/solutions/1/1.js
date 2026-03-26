/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  coins.sort((a, b) => a - b)
  let reach = 0,
    add = 0,
    i = 0
  while (reach < target) {
    if (i < coins.length && coins[i] <= reach + 1) {
      reach += coins[i++]
    } else {
      reach += reach + 1
      add++
    }
  }
  return add
}
