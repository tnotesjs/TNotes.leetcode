/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  const count = new Array(10).fill(0)
  for (const c of num) count[+c]++
  let left = '',
    mid = ''
  for (let d = 9; d >= 0; d--) {
    const pairs = Math.floor(count[d] / 2)
    left += String(d).repeat(pairs)
    count[d] -= pairs * 2
  }
  if (left.length === 0 || left[0] === '0') {
    for (let d = 9; d >= 0; d--) {
      if (count[d] > 0) return String(d)
    }
    return '0'
  }
  for (let d = 9; d >= 0; d--) {
    if (count[d] > 0) {
      mid = String(d)
      break
    }
  }
  return left + mid + left.split('').reverse().join('')
}
