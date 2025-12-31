/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let cnt = 0
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === letter) cnt += 1
  }
  return Math.floor((cnt * 100) / s.length)
}
