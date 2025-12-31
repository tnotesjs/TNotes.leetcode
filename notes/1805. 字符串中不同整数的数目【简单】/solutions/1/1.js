/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const set = new Set()
  let i = 0

  while (i < word.length) {
    if (word[i] < '0' || word[i] > '9') {
      i += 1
      continue
    }

    let j = i
    while (j < word.length && word[j] >= '0' && word[j] <= '9') {
      j += 1
    }

    // 去掉前导零
    let start = i
    while (start < j && word[start] === '0') {
      start += 1
    }
    const numStr = start === j ? '0' : word.slice(start, j)
    set.add(numStr)
    i = j
  }

  return set.size
}
