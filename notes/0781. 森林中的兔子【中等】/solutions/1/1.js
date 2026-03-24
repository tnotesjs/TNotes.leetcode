/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const map = new Map()
  let res = 0
  for (const a of answers) {
    if (map.has(a) && map.get(a) > 0) {
      map.set(a, map.get(a) - 1)
    } else {
      res += a + 1
      map.set(a, a)
    }
  }
  return res
}
