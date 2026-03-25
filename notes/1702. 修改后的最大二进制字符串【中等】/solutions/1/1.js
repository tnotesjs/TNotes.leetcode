/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
  const n = binary.length
  // 找第一个 0 的位置
  let firstZero = -1
  for (let i = 0; i < n; i++) {
    if (binary[i] === '0') {
      firstZero = i
      break
    }
  }
  if (firstZero === -1) return binary
  // 统计第一个 0 之后的 0 的个数
  let zeros = 0
  for (let i = firstZero; i < n; i++) {
    if (binary[i] === '0') zeros++
  }
  // 结果：前面全 1，在 firstZero + zeros - 1 位置有一个 0，后面全 1
  const res = new Array(n).fill('1')
  res[firstZero + zeros - 1] = '0'
  return res.join('')
}
