/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  const res = []
  for (let i = 0; i < 1 << n; i++) {
    // 格雷码：i ^ (i >> 1)，再异或 start 使得起始值为 start
    res.push(i ^ (i >> 1) ^ start)
  }
  return res
}
