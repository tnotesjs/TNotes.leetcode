/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  // 补齐前导 0 到 4 位
  const s1 = String(num1).padStart(4, '0')
  const s2 = String(num2).padStart(4, '0')
  const s3 = String(num3).padStart(4, '0')

  // 每一位取最小值
  let key = ''
  for (let i = 0; i < 4; i++) {
    key += Math.min(s1[i], s2[i], s3[i])
  }

  return Number(key)
}
