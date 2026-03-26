/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
  const map = new Map()
  for (const [name, time] of access_times) {
    if (!map.has(name)) map.set(name, [])
    map.get(name).push(parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(2)))
  }
  const result = []
  for (const [name, times] of map) {
    times.sort((a, b) => a - b)
    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] < 60) {
        result.push(name)
        break
      }
    }
  }
  return result
}
