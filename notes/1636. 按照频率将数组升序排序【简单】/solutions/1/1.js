/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const freq = new Map()
  for (const x of nums) freq.set(x, (freq.get(x) || 0) + 1)

  return nums.sort((a, b) => {
    const fa = freq.get(a)
    const fb = freq.get(b)
    if (fa !== fb) return fa - fb
    return b - a
  })
}
