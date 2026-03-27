/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
  const n = word.length
  // 每次移除前 k 个字符，添加 k 个任意字符
  // 第 t 步后，word[t*k..n-1] 需要等于原 word[0..n-t*k-1]
  for (let t = 1; t * k < n; t++) {
    const start = t * k
    let match = true
    for (let i = start; i < n; i++) {
      if (word[i] !== word[i - start]) {
        match = false
        break
      }
    }
    if (match) return t
  }
  return Math.ceil(n / k)
}
