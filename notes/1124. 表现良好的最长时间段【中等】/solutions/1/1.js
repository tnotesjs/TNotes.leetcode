/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const map = new Map()
  let prefix = 0,
    res = 0
  for (let i = 0; i < hours.length; i++) {
    prefix += hours[i] > 8 ? 1 : -1
    if (prefix > 0) {
      res = i + 1
    } else {
      if (!map.has(prefix)) map.set(prefix, i)
      if (map.has(prefix - 1)) {
        res = Math.max(res, i - map.get(prefix - 1))
      }
    }
  }
  return res
}
