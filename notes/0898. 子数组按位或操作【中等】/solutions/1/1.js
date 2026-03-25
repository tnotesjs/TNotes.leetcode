/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  const res = new Set()
  let prev = new Set()
  for (const num of arr) {
    const cur = new Set([num])
    for (const p of prev) cur.add(p | num)
    for (const v of cur) res.add(v)
    prev = cur
  }
  return res.size
}
