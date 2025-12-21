/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
  const n = digits.length
  const result = new Set()

  // 枚举三个不同位置的数字
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) continue
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue

        // 百位不能为 0，个位必须为偶数
        if (digits[i] !== 0 && digits[k] % 2 === 0) {
          const num = digits[i] * 100 + digits[j] * 10 + digits[k]
          result.add(num)
        }
      }
    }
  }

  return result.size
}
