/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {
  const map = new Map()
  for (const s of allowed) {
    const key = s[0] + s[1]
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(s[2])
  }
  const build = (row) => {
    if (row.length === 1) return true
    const nexts = []
    const dfs = (i, cur) => {
      if (i === row.length - 1) return build(cur)
      const key = row[i] + row[i + 1]
      const chars = map.get(key) || []
      for (const c of chars) {
        if (dfs(i + 1, cur + c)) return true
      }
      return false
    }
    return dfs(0, '')
  }
  return build(bottom)
}
