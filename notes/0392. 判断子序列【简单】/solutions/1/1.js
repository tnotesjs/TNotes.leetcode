/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0 // 指向 s 的指针
  for (let j = 0; j < t.length; j++) {
    if (i < s.length && s[i] === t[j]) {
      i++
    }
  }
  return i === s.length
}
