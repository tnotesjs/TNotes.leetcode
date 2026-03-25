/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  // 将每个无重复字符的字符串转为位掩码
  const masks = []
  for (const s of arr) {
    let mask = 0,
      valid = true
    for (const c of s) {
      const bit = 1 << (c.charCodeAt(0) - 97)
      if (mask & bit) {
        valid = false
        break
      }
      mask |= bit
    }
    if (valid) masks.push(mask)
  }
  let ans = 0
  const dfs = (idx, cur) => {
    ans = Math.max(ans, popcount(cur))
    for (let i = idx; i < masks.length; i++) {
      if ((cur & masks[i]) === 0) {
        dfs(i + 1, cur | masks[i])
      }
    }
  }
  dfs(0, 0)
  return ans
}

function popcount(x) {
  let cnt = 0
  while (x) {
    cnt++
    x &= x - 1
  }
  return cnt
}
