/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
  // 执行 k 次操作后，num1 - k * num2 需要能被表示为 k 个 2 的幂次之和
  // 即 num1 - k * num2 >= k 且 popcount(num1 - k * num2) <= k
  for (let k = 0; k <= 60; k++) {
    const val = num1 - k * num2
    if (val < k) return -1
    // popcount
    let bits = 0
    let v = val
    while (v > 0) {
      bits += v & 1
      v = Math.floor(v / 2)
    }
    if (bits <= k) return k
  }
  return -1
}
