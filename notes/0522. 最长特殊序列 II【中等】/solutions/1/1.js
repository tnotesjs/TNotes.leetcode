/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const isSub = (a, b) => {
    let i = 0
    for (let j = 0; j < b.length && i < a.length; j++) if (a[i] === b[j]) i++
    return i === a.length
  }
  let res = -1
  for (let i = 0; i < strs.length; i++) {
    let unique = true
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSub(strs[i], strs[j])) {
        unique = false
        break
      }
    }
    if (unique) res = Math.max(res, strs[i].length)
  }
  return res
}
