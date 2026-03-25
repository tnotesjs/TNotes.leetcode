/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort()
  const res = [folder[0]]
  for (let i = 1; i < folder.length; i++) {
    const last = res[res.length - 1] + '/'
    if (!folder[i].startsWith(last)) {
      res.push(folder[i])
    }
  }
  return res
}
