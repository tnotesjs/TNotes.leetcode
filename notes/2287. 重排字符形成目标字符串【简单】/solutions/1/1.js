/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const cntS = Array(26).fill(0)
  const cntT = Array(26).fill(0)
  for (let i = 0; i < s.length; i += 1) cntS[s.charCodeAt(i) - 97] += 1
  for (let i = 0; i < target.length; i += 1)
    cntT[target.charCodeAt(i) - 97] += 1

  let ans = Infinity
  for (let c = 0; c < 26; c += 1) {
    if (cntT[c] === 0) continue
    ans = Math.min(ans, Math.floor(cntS[c] / cntT[c]))
  }

  return ans === Infinity ? 0 : ans
}
