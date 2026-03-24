/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const map = new Map()
  for (const path of paths) {
    const parts = path.split(' ')
    const dir = parts[0]
    for (let i = 1; i < parts.length; i++) {
      const idx = parts[i].indexOf('(')
      const file = parts[i].substring(0, idx)
      const content = parts[i].substring(idx + 1, parts[i].length - 1)
      if (!map.has(content)) map.set(content, [])
      map.get(content).push(`${dir}/${file}`)
    }
  }
  const res = []
  for (const files of map.values()) {
    if (files.length > 1) res.push(files)
  }
  return res
}
