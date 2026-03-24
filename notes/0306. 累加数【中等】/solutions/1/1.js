/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  const n = num.length
  function addStrings(a, b) {
    let i = a.length - 1,
      j = b.length - 1,
      carry = 0,
      res = ''
    while (i >= 0 || j >= 0 || carry) {
      const sum = (i >= 0 ? +a[i--] : 0) + (j >= 0 ? +b[j--] : 0) + carry
      res = (sum % 10) + res
      carry = Math.floor(sum / 10)
    }
    return res
  }
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    for (let j = i + 1; j < n; j++) {
      const s1 = num.slice(0, i),
        s2 = num.slice(i, j)
      if (s1.length > 1 && s1[0] === '0') break
      if (s2.length > 1 && s2[0] === '0') continue
      let a = s1,
        b = s2,
        pos = j
      while (pos < n) {
        const c = addStrings(a, b)
        if (!num.startsWith(c, pos)) break
        pos += c.length
        a = b
        b = c
      }
      if (pos === n) return true
    }
  }
  return false
}
