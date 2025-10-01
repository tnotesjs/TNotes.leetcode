/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  // n 右移一位后与原数异或，如果是交替位，结果应该是全 1
  const xor = n ^ (n >> 1)

  // 检查 xor 是否为全 1（形如 111...111）
  // 全 1 的数字加 1 后会变成 1000...000，与原数按位与结果为 0
  return (xor & (xor + 1)) === 0
}
