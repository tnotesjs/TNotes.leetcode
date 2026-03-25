/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  const stack = []
  const pLen = part.length
  for (const ch of s) {
    stack.push(ch)
    if (stack.length >= pLen && stack.slice(-pLen).join('') === part) {
      stack.length -= pLen
    }
  }
  return stack.join('')
}
