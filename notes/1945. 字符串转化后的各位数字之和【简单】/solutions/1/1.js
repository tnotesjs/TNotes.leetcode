/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  // 先直接得到转换后的数位和，避免构造长字符串
  let sum = 0
  for (let i = 0; i < s.length; i += 1) {
    const val = s.charCodeAt(i) - 96 // 'a' -> 1
    sum += Math.floor(val / 10) + (val % 10)
  }

  // 第一次转换已经完成，再做 k-1 轮数位和
  for (let t = 1; t < k; t += 1) {
    let next = 0
    while (sum > 0) {
      next += sum % 10
      sum = Math.floor(sum / 10)
    }
    sum = next
  }

  return sum
}
