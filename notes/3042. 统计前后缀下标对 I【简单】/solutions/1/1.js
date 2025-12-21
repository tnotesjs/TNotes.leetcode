/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  const isPrefixAndSuffix = (str1, str2) => {
    return str2.startsWith(str1) && str2.endsWith(str1)
  }

  let count = 0
  const n = words.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++
      }
    }
  }
  return count
}
