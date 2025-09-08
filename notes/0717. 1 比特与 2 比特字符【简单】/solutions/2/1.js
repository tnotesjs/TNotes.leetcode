/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 从倒数第二个元素开始，统计连续 1 的个数
  let count = 0
  for (let i = bits.length - 2; i >= 0 && bits[i] === 1; i--) {
    count++
  }
  // 如果连续 1 的个数为偶数，则最后一个 0 是独立的 1 比特字符
  return count % 2 === 0
}
