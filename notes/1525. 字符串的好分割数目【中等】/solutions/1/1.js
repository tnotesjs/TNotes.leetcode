/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  const rightCnt = new Array(26).fill(0)
  for (const c of s) rightCnt[c.charCodeAt(0) - 97]++
  const leftCnt = new Array(26).fill(0)
  let leftUniq = 0,
    rightUniq = 0
  for (let i = 0; i < 26; i++) if (rightCnt[i] > 0) rightUniq++
  let res = 0
  for (let i = 0; i < s.length - 1; i++) {
    const c = s.charCodeAt(i) - 97
    if (leftCnt[c] === 0) leftUniq++
    leftCnt[c]++
    rightCnt[c]--
    if (rightCnt[c] === 0) rightUniq--
    if (leftUniq === rightUniq) res++
  }
  return res
}
