/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const result = new Array(n + 1)

  for (let i = 0; i <= n; i++) {
    result[i] = countOnes(i)
  }

  return result
}

// 计算一个数字二进制表示中 1 的个数
function countOnes(num) {
  let count = 0
  while (num > 0) {
    count += num & 1
    num >>= 1
  }
  return count
}
