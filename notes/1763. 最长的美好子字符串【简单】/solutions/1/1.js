/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  // 分治
  const dfs = (str) => {
    if (str.length < 2) return ''
    const set = new Set(str)
    for (let i = 0; i < str.length; i += 1) {
      const ch = str[i]
      const counterpart =
        ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()

      // 坏字符作为切割点
      if (!set.has(counterpart)) {
        // 递归左右
        const left = dfs(str.slice(0, i))
        const right = dfs(str.slice(i + 1))

        // 先比长度，长度相同取左，保证最早出现优先
        return right.length > left.length ? right : left
      }
    }
    return str
  }

  return dfs(s)
}
