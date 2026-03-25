/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let l = 0,
    r = s.length - 1
  while (l < r && s[l] === s[r]) {
    const c = s[l]
    while (l <= r && s[l] === c) l++
    while (l <= r && s[r] === c) r--
  }
  return r - l + 1
}
