/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const convert = (l, r) => {
    if (l > r) return
    ;[s[l], s[r]] = [s[r], s[l]]
    convert(l + 1, r - 1)
  }
  convert(0, s.length - 1)
}
