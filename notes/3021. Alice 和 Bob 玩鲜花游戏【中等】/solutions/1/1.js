/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
  // Alice 先手，总花数 x+y 为奇数时 Alice 赢
  // x+y 为奇数 => x 和 y 奇偶不同
  const oddN = Math.floor((n + 1) / 2)
  const evenN = Math.floor(n / 2)
  const oddM = Math.floor((m + 1) / 2)
  const evenM = Math.floor(m / 2)
  return oddN * evenM + evenN * oddM
}
