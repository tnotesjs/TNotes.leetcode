/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  let res = ''
  let cnt = 0
  let prev = ''

  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i]
    if (ch === prev) {
      cnt += 1
    } else {
      prev = ch
      cnt = 1
    }

    if (cnt <= 2) res += ch
  }

  return res
}
