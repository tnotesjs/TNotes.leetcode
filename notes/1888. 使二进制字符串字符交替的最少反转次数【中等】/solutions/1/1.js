/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  const n = s.length
  const ss = s + s
  let diff0 = 0,
    diff1 = 0 // 与“01...”和“10...”的不匹配数
  for (let i = 0; i < n; i++) {
    if (ss[i] !== String(i % 2)) diff0++
    if (ss[i] !== String(1 - (i % 2))) diff1++
  }
  let ans = Math.min(diff0, diff1)
  for (let i = n; i < 2 * n; i++) {
    // 加入 i，移除 i-n
    if (ss[i] !== String(i % 2)) diff0++
    if (ss[i] !== String(1 - (i % 2))) diff1++
    if (ss[i - n] !== String((i - n) % 2)) diff0--
    if (ss[i - n] !== String(1 - ((i - n) % 2))) diff1--
    ans = Math.min(ans, diff0, diff1)
  }
  return ans
}
