/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  const n = s.length
  let total0 = 0,
    total1 = 0
  for (const ch of s) {
    if (ch === '0') total0++
    else total1++
  }
  let count0 = 0,
    count1 = 0,
    ans = 0
  for (const ch of s) {
    if (ch === '0') {
      ans += count1 * (total1 - count1)
      count0++
    } else {
      ans += count0 * (total0 - count0)
      count1++
    }
  }
  return ans
}
