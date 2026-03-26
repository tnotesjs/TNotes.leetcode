/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowels = new Set('aeiouAEIOU')
  const vArr = []
  for (const c of s) {
    if (vowels.has(c)) vArr.push(c)
  }
  vArr.sort()
  const res = [...s]
  let vi = 0
  for (let i = 0; i < res.length; i++) {
    if (vowels.has(res[i])) res[i] = vArr[vi++]
  }
  return res.join('')
}
