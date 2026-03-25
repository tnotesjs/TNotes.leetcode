/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function (a, b) {
  const cntA = new Array(26).fill(0),
    cntB = new Array(26).fill(0)
  for (const c of a) cntA[c.charCodeAt(0) - 97]++
  for (const c of b) cntB[c.charCodeAt(0) - 97]++
  let res = a.length + b.length
  // 条件3：全变成同一字母
  for (let i = 0; i < 26; i++) {
    res = Math.min(res, a.length + b.length - cntA[i] - cntB[i])
  }
  // 条件1 & 2: 一个全部 < 某字母, 另一个全部 >= 某字母
  let preA = 0,
    preB = 0
  for (let i = 0; i < 25; i++) {
    preA += cntA[i]
    preB += cntB[i]
    // a < b: a 只保留 [0..i], b 只保留 [i+1..25]
    res = Math.min(res, a.length - preA + preB)
    // b < a
    res = Math.min(res, preA + (b.length - preB))
  }
  return res
}
