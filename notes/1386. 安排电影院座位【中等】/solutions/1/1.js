/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const map = new Map()
  for (const [row, col] of reservedSeats) {
    map.set(row, (map.get(row) || 0) | (1 << col))
  }

  // 座位 2-5, 4-7, 6-9 对应的位掩码
  const left = 0b0111100 // seats 2,3,4,5
  const mid = 0b0001111000 // seats 4,5,6,7 -> 但要注意 bit 位置
  // 重新计算：col 从 1 开始，bit col 表示第 col 列
  // seats 2-5: bits 2,3,4,5 => 0b00111100 = 0x3C
  // seats 4-7: bits 4,5,6,7 => 0b11110000 = 0xF0
  // seats 6-9: bits 6,7,8,9 => 0b1111000000 = 0x3C0
  const L = 0b111100 // bits 2-5
  const M = 0b11110000 // bits 4-7
  const R = 0b1111000000 // bits 6-9

  let res = (n - map.size) * 2 // 没有预约的行，每行可坐 2 组
  for (const mask of map.values()) {
    if (!(mask & L) && !(mask & R)) res += 2
    else if (!(mask & L) || !(mask & M) || !(mask & R)) res += 1
  }
  return res
}
