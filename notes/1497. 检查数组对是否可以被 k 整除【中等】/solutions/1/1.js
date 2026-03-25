/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const cnt = new Array(k).fill(0)
  for (const x of arr) cnt[((x % k) + k) % k]++
  if (cnt[0] % 2 !== 0) return false
  for (let i = 1; i <= k >> 1; i++) {
    if (cnt[i] !== cnt[k - i]) return false
  }
  return true
}
