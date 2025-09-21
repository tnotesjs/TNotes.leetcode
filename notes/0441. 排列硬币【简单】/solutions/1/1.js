/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 1
  let right = n

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    // 计算 mid 层填满需要的硬币数量
    let coinsNeeded = (mid * (mid + 1)) / 2

    if (coinsNeeded === n) {
      return mid
    } else if (coinsNeeded < n) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right
}
