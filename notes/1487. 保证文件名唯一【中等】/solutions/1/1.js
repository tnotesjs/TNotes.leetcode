/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const map = new Map() // 文件名 -> 下一个可用编号
  const res = []
  for (const name of names) {
    if (!map.has(name)) {
      res.push(name)
      map.set(name, 1)
    } else {
      let k = map.get(name)
      while (map.has(`${name}(${k})`)) k++
      const newName = `${name}(${k})`
      res.push(newName)
      map.set(name, k + 1)
      map.set(newName, 1)
    }
  }
  return res
}
