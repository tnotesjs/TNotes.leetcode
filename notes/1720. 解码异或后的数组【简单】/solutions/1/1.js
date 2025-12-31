/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const n = encoded.length + 1
  const arr = new Array(n)
  arr[0] = first

  // 按公式 arr[i+1] = encoded[i] XOR arr[i] 顺推还原
  for (let i = 0; i < encoded.length; i += 1) {
    arr[i + 1] = encoded[i] ^ arr[i]
  }

  return arr
}
