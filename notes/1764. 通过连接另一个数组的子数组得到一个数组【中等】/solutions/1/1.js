/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  let j = 0 // nums 中的当前位置
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i]
    let found = false
    while (j + g.length <= nums.length) {
      let match = true
      for (let k = 0; k < g.length; k++) {
        if (nums[j + k] !== g[k]) {
          match = false
          break
        }
      }
      if (match) {
        j += g.length
        found = true
        break
      }
      j++
    }
    if (!found) return false
  }
  return true
}
