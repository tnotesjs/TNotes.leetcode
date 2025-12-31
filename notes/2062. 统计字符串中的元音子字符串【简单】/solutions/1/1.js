/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  const isVowel = (ch) =>
    ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'

  const atMost = (s, k) => {
    const freq = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    let distinct = 0
    let res = 0
    let left = 0

    for (let right = 0; right < s.length; right += 1) {
      const ch = s[right]
      if (freq[ch] === 0) distinct += 1
      freq[ch] += 1

      while (distinct > k) {
        const lc = s[left]
        freq[lc] -= 1
        if (freq[lc] === 0) distinct -= 1
        left += 1
      }

      res += right - left + 1
    }

    return res
  }

  let ans = 0
  const n = word.length
  let i = 0

  while (i < n) {
    if (!isVowel(word[i])) {
      i += 1
      continue
    }

    const start = i
    while (i < n && isVowel(word[i])) i += 1
    const segment = word.slice(start, i)
    ans += atMost(segment, 5) - atMost(segment, 4)
  }

  return ans
}
