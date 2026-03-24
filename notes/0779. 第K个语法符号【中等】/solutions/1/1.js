/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0
  if (k % 2 === 1) return kthGrammar(n - 1, Math.ceil(k / 2))
  return 1 - kthGrammar(n - 1, k / 2)
}
