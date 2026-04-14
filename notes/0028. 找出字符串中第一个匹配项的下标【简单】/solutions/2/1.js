/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length
  const m = needle.length

  if (m === 0) return 0

  const next = new Array(m).fill(0)
  let j = 0

  for (let i = 1; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (needle[i] === needle[j]) {
      j++
    }
    next[i] = j
  }

  j = 0
  for (let i = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if (haystack[i] === needle[j]) {
      j++
    }
    if (j === m) {
      return i - m + 1
    }
  }

  return -1
}
