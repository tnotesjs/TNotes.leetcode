/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const n = text.length
  const freq = new Array(26).fill(0)
  for (const c of text) freq[c.charCodeAt(0) - 97]++
  // 分组连续相同字符
  const groups = []
  let i = 0
  while (i < n) {
    let j = i
    while (j < n && text[j] === text[i]) j++
    groups.push([text[i], j - i])
    i = j
  }
  let ans = 0
  for (let g = 0; g < groups.length; g++) {
    const [c, len] = groups[g]
    const ci = c.charCodeAt(0) - 97
    // 单组：可以从其他位置交换一个过来扩展
    ans = Math.max(ans, Math.min(len + 1, freq[ci]))
    // 两组仅隔一个不同字符，可合并
    if (
      g + 2 < groups.length &&
      groups[g + 1][1] === 1 &&
      groups[g + 2][0] === c
    ) {
      ans = Math.max(ans, Math.min(len + groups[g + 2][1] + 1, freq[ci]))
    }
  }
  return ans
}
