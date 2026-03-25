/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  const n = s.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] ^ (1 << (s.charCodeAt(i) - 97))
  }
  function popcount(x) {
    let count = 0
    while (x) {
      count++
      x &= x - 1
    }
    return count
  }
  return queries.map(([left, right, k]) => {
    const xor = prefix[right + 1] ^ prefix[left]
    return Math.floor(popcount(xor) / 2) <= k
  })
}
