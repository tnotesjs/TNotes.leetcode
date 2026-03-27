/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
  const n = s.length
  // 26 个栈，每个字母一个
  const stacks = Array.from({length: 26}, () => [])
  const removed = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    if (s[i] === '*') {
      removed[i] = true
      // 删除最小字母的最近出现
      for (let c = 0; c < 26; c++) {
        if (stacks[c].length > 0) {
          removed[stacks[c].pop()] = true
          break
        }
      }
    } else {
      stacks[s.charCodeAt(i) - 97].push(i)
    }
  }
  let res = ''
  for (let i = 0; i < n; i++) {
    if (!removed[i]) res += s[i]
  }
  return res
}
