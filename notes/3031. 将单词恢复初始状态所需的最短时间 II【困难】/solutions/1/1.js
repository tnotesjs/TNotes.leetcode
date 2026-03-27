/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
  const n = word.length
  // Z 函数：z[i] 表示 word[i..] 与 word 的最长公共前缀长度
  const z = new Array(n).fill(0)
  let l = 0, r = 0
  for (let i = 1; i < n; i++) {
    if (i < r) z[i] = Math.min(r - i, z[i - l])
    while (i + z[i] < n && word[z[i]] === word[i + z[i]]) z[i]++
    if (i + z[i] > r) { l = i; r = i + z[i] }
  }
  for (let t = 1; t * k < n; t++) {
    if (z[t * k] >= n - t * k) return t
  }
  return Math.ceil(n / k)
}
