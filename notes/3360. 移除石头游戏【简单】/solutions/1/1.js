/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
  let remove = 10 // 当前需要移除的石头数
  let aliceTurn = true // 是否是 Alice 的回合

  while (n >= remove && remove > 0) {
    n -= remove
    remove--
    aliceTurn = !aliceTurn
  }

  // 如果当前是 Alice 的回合且无法操作，Alice 输
  // 如果当前是 Bob 的回合且无法操作，Alice 赢
  return !aliceTurn
}
