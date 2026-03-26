/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  const isBalanced = (num) => {
    const s = String(num)
    const cnt = new Array(10).fill(0)
    for (const c of s) cnt[Number(c)]++
    for (let d = 0; d <= 9; d++) {
      if (cnt[d] !== 0 && cnt[d] !== d) return false
    }
    return true
  }
  for (let i = n + 1; ; i++) {
    if (isBalanced(i)) return i
  }
}
