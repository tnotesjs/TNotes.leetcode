/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length
  const cnt = new Array(n + 1).fill(0)
  const C = new Array(n)
  let common = 0
  for (let i = 0; i < n; i++) {
    cnt[A[i]]++
    if (cnt[A[i]] === 2) common++
    cnt[B[i]]++
    if (cnt[B[i]] === 2) common++
    C[i] = common
  }
  return C
}
