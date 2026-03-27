/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
  // 相邻和对 2 取余相同：全偶、全奇、或奇偶交替
  let even = 0, odd = 0, alt = 0
  let lastAlt = -1
  for (const x of nums) {
    const p = x % 2
    if (p === 0) even++
    else odd++
    if (lastAlt === -1 || p !== lastAlt) {
      alt++
      lastAlt = p
    }
  }
  return Math.max(even, odd, alt)
}
