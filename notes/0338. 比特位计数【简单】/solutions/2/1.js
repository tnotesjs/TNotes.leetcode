/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = new Array(n + 1)
  result[0] = 0

  for (let i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1)
    // i >> 1 表示去除最低位
    // result[i >> 1] 表示去掉最低位后，剩下的部分有多少个 1。（这是复用已计算好的结果）
    // (i & 1) 检查最低位是不是 1
  }

  return result
}
