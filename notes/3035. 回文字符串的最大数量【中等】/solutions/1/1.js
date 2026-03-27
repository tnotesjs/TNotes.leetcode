/**
 * @param {string[]} words
 * @return {number}
 */
var maxPalindromesAfterOperations = function(words) {
  // 统计所有字符频次
  const freq = new Array(26).fill(0)
  for (const w of words) {
    for (const ch of w) {
      freq[ch.charCodeAt(0) - 97]++
    }
  }
  // 统计字符对数和单个字符数
  let pairs = 0
  for (const f of freq) {
    pairs += Math.floor(f / 2)
  }
  // 按长度排序，优先填充短字符串
  const lens = words.map(w => w.length).sort((a, b) => a - b)
  let ans = 0
  for (const len of lens) {
    const needPairs = Math.floor(len / 2)
    if (pairs >= needPairs) {
      pairs -= needPairs
      ans++
    }
  }
  return ans
}
