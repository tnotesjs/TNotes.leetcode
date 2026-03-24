/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  const res = []
  let inBlock = false
  let line = ''
  for (const s of source) {
    let i = 0
    if (!inBlock) line = ''
    while (i < s.length) {
      if (inBlock) {
        if (i + 1 < s.length && s[i] === '*' && s[i + 1] === '/') {
          inBlock = false
          i += 2
        } else {
          i++
        }
      } else {
        if (i + 1 < s.length && s[i] === '/' && s[i + 1] === '/') {
          break
        } else if (i + 1 < s.length && s[i] === '/' && s[i + 1] === '*') {
          inBlock = true
          i += 2
        } else {
          line += s[i]
          i++
        }
      }
    }
    if (!inBlock && line.length > 0) res.push(line)
  }
  return res
}
