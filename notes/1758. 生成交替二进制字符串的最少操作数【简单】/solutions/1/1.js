/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let diffStart0 = 0
  let diffStart1 = 0

  // 统计分别与"0101..."和"1010..."的差异数
  for (let i = 0; i < s.length; i += 1) {
    const expect0 = i % 2 === 0 ? '0' : '1'
    const expect1 = i % 2 === 0 ? '1' : '0'
    if (s[i] !== expect0) diffStart0 += 1
    if (s[i] !== expect1) diffStart1 += 1
  }
  return Math.min(diffStart0, diffStart1)
}
