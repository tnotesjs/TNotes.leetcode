/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const map = new Map()
  const res = []
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i]
    if (!map.has(size)) map.set(size, [])
    map.get(size).push(i)
    if (map.get(size).length === size) {
      res.push(map.get(size))
      map.set(size, [])
    }
  }
  return res
}
