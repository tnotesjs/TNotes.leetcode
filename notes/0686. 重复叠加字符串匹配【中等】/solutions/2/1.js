/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  const aLen = a.length
  const bLen = b.length
  const need = Math.ceil(bLen / aLen)
  const next = buildNext(b)

  if (kmpSearchRepeated(a, b, need, next)) return need
  if (kmpSearchRepeated(a, b, need + 1, next)) return need + 1

  return -1
}

function buildNext(pattern) {
  const next = new Array(pattern.length).fill(0)

  for (let i = 1, j = 0; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) j = next[j - 1]
    if (pattern[i] === pattern[j]) j++
    next[i] = j
  }

  return next
}

function kmpSearchRepeated(a, pattern, repeatCount, next) {
  const totalLen = a.length * repeatCount

  for (let i = 0, j = 0; i < totalLen; i++) {
    const ch = a[i % a.length]

    while (j > 0 && ch !== pattern[j]) j = next[j - 1]
    if (ch === pattern[j]) j++
    if (j === pattern.length) return true
  }

  return false
}
