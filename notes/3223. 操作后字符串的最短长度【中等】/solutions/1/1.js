/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  let len = 0
  for (const f of freq) {
    if (f === 0) continue
    // 每次删除一对（左右各一个相同字符），频率 >= 3 时可以删
    // 最终：奇数频率剩 1，偶数频率剩 2
    len += f % 2 === 1 ? 1 : 2
  }
  return len
}
