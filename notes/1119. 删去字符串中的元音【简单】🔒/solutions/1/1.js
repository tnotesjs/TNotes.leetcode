/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  // 过滤掉元音字符：a e i o u
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (!vowels.has(ch)) res += ch
  }
  return res
}
