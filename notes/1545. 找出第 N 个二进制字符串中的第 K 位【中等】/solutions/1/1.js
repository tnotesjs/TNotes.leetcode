/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var findKthBit = function (n, k) {
  if (n === 1) return '0'
  const mid = 1 << (n - 1) // S_n 长度为 2^n - 1，中间位置为 2^(n-1)
  if (k === mid) return '1'
  if (k < mid) return findKthBit(n - 1, k)
  // k > mid: 对称位置取反
  return findKthBit(n - 1, 2 * mid - k) === '0' ? '1' : '0'
}
