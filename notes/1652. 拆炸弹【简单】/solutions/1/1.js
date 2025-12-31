/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length
  if (k === 0) return new Array(n).fill(0)

  const res = new Array(n).fill(0)
  const arr = code.concat(code)

  if (k > 0) {
    let sum = 0
    for (let i = 1; i <= k; i++) sum += arr[i]
    res[0] = sum
    for (let i = 1; i < n; i++) {
      sum += arr[i + k] - arr[i]
      res[i] = sum
    }
  } else {
    const w = -k
    let sum = 0
    let cur = n // 对应原数组下标 0 的位置
    for (let i = cur - w; i < cur; i++) sum += arr[i]
    res[0] = sum
    for (let i = 1; i < n; i++) {
      sum += arr[cur] - arr[cur - w]
      cur++
      res[i] = sum
    }
  }

  return res
}
