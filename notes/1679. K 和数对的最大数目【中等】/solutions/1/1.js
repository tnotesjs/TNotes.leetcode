/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map()
  let res = 0
  for (const x of nums) {
    const need = k - x
    if (map.get(need) > 0) {
      res++
      map.set(need, map.get(need) - 1)
    } else {
      map.set(x, (map.get(x) || 0) + 1)
    }
  }
  return res
}
