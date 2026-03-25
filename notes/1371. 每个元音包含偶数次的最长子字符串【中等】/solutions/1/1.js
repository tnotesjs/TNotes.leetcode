/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const vowels = { a: 0, e: 1, i: 2, o: 3, u: 4 }
  const first = new Map()
  first.set(0, -1)
  let mask = 0,
    ans = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]] !== undefined) mask ^= 1 << vowels[s[i]]
    if (first.has(mask)) ans = Math.max(ans, i - first.get(mask))
    else first.set(mask, i)
  }
  return ans
}
