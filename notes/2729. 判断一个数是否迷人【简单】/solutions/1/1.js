/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const str = '' + n + n * 2 + n * 3

  // 必须恰好 9 位数字（1-9 各一次）
  if (str.length !== 9) return false

  // 检查是否包含 0
  if (str.includes('0')) return false

  // 检查是否包含 1-9 各一次
  const count = new Array(10).fill(0)
  for (const char of str) {
    count[char]++
  }

  for (let i = 1; i <= 9; i++) {
    if (count[i] !== 1) return false
  }

  return true
}
