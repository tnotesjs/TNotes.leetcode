/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const len = arr.length
  if (len === 0) return []
  if (size >= len) return [[...arr]]
  const ansLen = Math.ceil(len / size)
  const ans = new Array(ansLen)
  for (let i = 0; i < ansLen; i++) {
    ans[i] = arr.slice(i * size, i * size + size)
  }
  return ans
};