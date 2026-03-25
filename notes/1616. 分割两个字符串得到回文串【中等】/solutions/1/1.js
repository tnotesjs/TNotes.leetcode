/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  const check = (s1, s2) => {
    let i = 0,
      j = s1.length - 1
    while (i < j && s1[i] === s2[j]) {
      i++
      j--
    }
    if (i >= j) return true
    // 中间部分检查 s1 或 s2 自身是否回文
    const isPalin = (s, l, r) => {
      while (l < r) {
        if (s[l++] !== s[r--]) return false
      }
      return true
    }
    return isPalin(s1, i, j) || isPalin(s2, i, j)
  }
  return check(a, b) || check(b, a)
}
