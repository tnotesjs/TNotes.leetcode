/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaces = 0
  for (const ch of text) if (ch === ' ') spaces++

  const words = text.trim().split(/\s+/).filter(Boolean)

  if (words.length === 1) {
    return words[0] + ' '.repeat(spaces)
  }

  const gaps = words.length - 1
  const perGap = Math.floor(spaces / gaps)
  const tail = spaces % gaps

  return words.join(' '.repeat(perGap)) + ' '.repeat(tail)
}
