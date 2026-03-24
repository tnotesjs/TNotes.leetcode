/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []

  const dfs = (start, seg, path) => {
    if (seg === 4 && start === s.length) {
      result.push(path.join('.'))
      return
    }
    if (seg === 4 || start === s.length) return

    for (let len = 1; len <= 3 && start + len <= s.length; len++) {
      if (len > 1 && s[start] === '0') break // 禁止前导零
      const part = s.substring(start, start + len)
      if (Number(part) > 255) break
      path.push(part)
      dfs(start + len, seg + 1, path)
      path.pop()
    }
  }

  dfs(0, 0, [])
  return result
}
