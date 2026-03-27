/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
  const MOD = 1e9 + 7
  const arr = new Array(n).fill(1)
  for (let t = 0; t < k; t++) {
    for (let i = 1; i < n; i++) {
      arr[i] = (arr[i] + arr[i - 1]) % MOD
    }
  }
  return arr[n - 1]
}
