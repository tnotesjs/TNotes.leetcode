/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const n = s.length
  let count = 0
  for (let i = 0; i < n; i++) {
    let v = 0,
      c = 0
    for (let j = i; j < n; j++) {
      if (vowels.has(s[j])) v++
      else c++
      if (v === c && (v * c) % k === 0) count++
    }
  }
  return count
}
