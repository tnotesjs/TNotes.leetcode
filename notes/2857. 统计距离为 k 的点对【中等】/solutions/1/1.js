/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function(coordinates, k) {
  const map = new Map()
  let ans = 0
  for (const [x, y] of coordinates) {
    for (let a = 0; a <= k; a++) {
      const key = `${x ^ a},${y ^ (k - a)}`
      ans += map.get(key) || 0
    }
    const myKey = `${x},${y}`
    map.set(myKey, (map.get(myKey) || 0) + 1)
  }
  return ans
}
