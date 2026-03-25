/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
  const set = new Set()
  for (const word of words) {
    const even = [],
      odd = []
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) even.push(word[i])
      else odd.push(word[i])
    }
    set.add(even.sort().join('') + odd.sort().join(''))
  }
  return set.size
}
