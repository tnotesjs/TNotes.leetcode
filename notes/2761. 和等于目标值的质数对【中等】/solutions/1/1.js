/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function (n) {
  // 埃氏筛
  const isPrime = new Array(n + 1).fill(true)
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false
    }
  }
  const res = []
  for (let x = 2; x <= n / 2; x++) {
    if (isPrime[x] && isPrime[n - x]) {
      res.push([x, n - x])
    }
  }
  return res
}
