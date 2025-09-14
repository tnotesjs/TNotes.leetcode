/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const res = []

  // 枚举所有合法的小时和分钟
  for (let h = 0; h <= 11; h++) {
    for (let m = 0; m <= 59; m++) {
      // 小时二进制中 1 的个数
      const hOnes = bitCount(h)
      // 分钟二进制中 1 的个数
      const mOnes = bitCount(m)
      // 判断小时和分钟的二进制中 1 的个数之和是否等于 turnedOn
      if (hOnes + mOnes === turnedOn) {
        // 按照题目要求，格式化分钟为两位数
        res.push(`${h}:${m < 10 ? '0' + m : m}`)
      }
    }
  }

  return res
}

function bitCount(n) {
  let count = 0
  while (n) {
    count++
    n &= n - 1 // 清除最低位的1
  }
  return count
}
