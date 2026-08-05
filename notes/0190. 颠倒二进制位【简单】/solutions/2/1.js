/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
  // 先交换左右 16 位，再 8、4、2、1，成块完成位反转
  n = ((n >>> 16) | (n << 16)) >>> 0
  n = (((n & 0x00ff00ff) << 8) | ((n & 0xff00ff00) >>> 8)) >>> 0
  n = (((n & 0x0f0f0f0f) << 4) | ((n & 0xf0f0f0f0) >>> 4)) >>> 0
  n = (((n & 0x33333333) << 2) | ((n & 0xcccccccc) >>> 2)) >>> 0
  n = (((n & 0x55555555) << 1) | ((n & 0xaaaaaaaa) >>> 1)) >>> 0
  return n
}
