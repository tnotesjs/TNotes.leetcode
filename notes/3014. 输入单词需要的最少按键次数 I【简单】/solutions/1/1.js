/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const n = word.length
  // 8 个按键（2-9），每个按键可以映射多个字母
  // 前 8 个字母各需要按 1 次，接下来 8 个各需要按 2 次，以此类推
  // 由于所有字母互不相同，直接按字母数量计算即可
  let result = 0
  for (let i = 0; i < n; i++) {
    // 第 i 个字母需要按 (i / 8 + 1) 次
    result += Math.floor(i / 8) + 1
  }
  return result
}
