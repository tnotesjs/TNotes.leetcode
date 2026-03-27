/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
  let count = 0
  for (const ch of s) {
    if (ch === c) count++
  }
  // 从 count 个位置中选 2 个作为起始和结束，加上 count 个长度为 1 的子串
  return count * (count + 1) / 2
}
