/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function (arr, k) {
  const n = arr.length
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const g = gcd(n, k)
  let ans = 0
  for (let i = 0; i < g; i++) {
    const group = []
    for (let j = i; j < n; j += g) group.push(arr[j])
    group.sort((a, b) => a - b)
    const mid = group[group.length >> 1]
    for (const x of group) ans += Math.abs(x - mid)
  }
  return ans
}
