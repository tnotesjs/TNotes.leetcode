/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  const encrypt = (x) => {
    const s = String(x)
    // 找到最大数位
    let maxDigit = '0'
    for (const c of s) {
      if (c > maxDigit) {
        maxDigit = c
      }
    }
    // 所有数位替换为最大数位
    return parseInt(maxDigit.repeat(s.length))
  }

  let sum = 0
  for (const num of nums) {
    sum += encrypt(num)
  }
  return sum
}
