/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  const n = s.length
  const ones = s.split('').filter((c) => c === '1').length

  // 最后一位放 1（保证奇数），其余的 1 都放在前面（保证最大）
  return '1'.repeat(ones - 1) + '0'.repeat(n - ones) + '1'
}
