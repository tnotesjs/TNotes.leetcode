/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const cnt = new Map()
  const ans = []
  for (const x of nums) {
    const c = cnt.get(x) || 0
    if (c >= ans.length) ans.push([])
    ans[c].push(x)
    cnt.set(x, c + 1)
  }
  return ans
}
