/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = []
  for (let i = 0; i < 1 << n; i++) result.push(i ^ (i >> 1)) // 格雷编码公式
  return result
}
