/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0

  // 遍历到倒数第二个元素为止
  while (i < bits.length - 1) {
    // 如果当前位是 1，则这是一个 2 比特字符，跳过下一个位置
    // 如果当前位是 0，则这是一个 1 比特字符，只移动一位
    i += bits[i] + 1
  }

  // 如果正好停在最后一个位置，说明最后一个 0 是一个独立的 1 比特字符
  return i === bits.length - 1
}
