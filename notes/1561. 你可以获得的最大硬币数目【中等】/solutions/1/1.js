/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b)
  let res = 0,
    n = piles.length
  // 每次选三堆：Bob 取最小，Alice 取最大，我们取第二大
  for (let i = n - 2; i >= n / 3; i -= 2) res += piles[i]
  return res
}
