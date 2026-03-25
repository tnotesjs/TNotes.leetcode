/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  const set = new Set(words)
  for (const word of words)
    for (let i = 1; i < word.length; i++) set.delete(word.slice(i))
  let res = 0
  for (const word of set) res += word.length + 1
  return res
}
