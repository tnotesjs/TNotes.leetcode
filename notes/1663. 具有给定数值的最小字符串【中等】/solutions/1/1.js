/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const res = new Array(n).fill('a')
  k -= n // 每个位置先放 'a'(=1)
  for (let i = n - 1; i >= 0 && k > 0; i--) {
    const add = Math.min(25, k)
    res[i] = String.fromCharCode(97 + add)
    k -= add
  }
  return res.join('')
}
