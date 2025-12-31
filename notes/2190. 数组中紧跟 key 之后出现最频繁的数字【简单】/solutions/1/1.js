/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const freq = new Map()
  let best = -1
  let bestCnt = 0

  for (let i = 0; i + 1 < nums.length; i += 1) {
    if (nums[i] !== key) continue
    const t = nums[i + 1]
    const c = (freq.get(t) || 0) + 1
    freq.set(t, c)
    if (c > bestCnt) {
      bestCnt = c
      best = t
    }
  }

  return best
}
