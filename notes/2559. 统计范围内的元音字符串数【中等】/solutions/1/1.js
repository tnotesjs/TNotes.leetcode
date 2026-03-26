/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const isVowelStr = (s) => vowels.has(s[0]) && vowels.has(s[s.length - 1])
  const n = words.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + (isVowelStr(words[i]) ? 1 : 0)
  return queries.map(([l, r]) => prefix[r + 1] - prefix[l])
}
