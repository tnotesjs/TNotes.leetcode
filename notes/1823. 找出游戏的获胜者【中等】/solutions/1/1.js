/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // 约瑟夫环问题迭代解
  let winner = 0
  for (let i = 2; i <= n; i++) {
    winner = (winner + k) % i
  }
  return winner + 1
}
