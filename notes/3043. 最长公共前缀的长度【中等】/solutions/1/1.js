/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
  const prefixes = new Set()
  for (const num of arr1) {
    let s = String(num)
    for (let i = 1; i <= s.length; i++) {
      prefixes.add(s.substring(0, i))
    }
  }
  let ans = 0
  for (const num of arr2) {
    let s = String(num)
    for (let i = s.length; i >= 1; i--) {
      if (prefixes.has(s.substring(0, i))) {
        ans = Math.max(ans, i)
        break
      }
    }
  }
  return ans
}
