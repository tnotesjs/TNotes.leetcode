/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const map = new Map()
  for (const [key, val] of knowledge) map.set(key, val)
  const res = []
  let i = 0
  while (i < s.length) {
    if (s[i] === '(') {
      let j = i + 1
      while (s[j] !== ')') j++
      const key = s.slice(i + 1, j)
      res.push(map.get(key) || '?')
      i = j + 1
    } else {
      res.push(s[i])
      i++
    }
  }
  return res.join('')
}
