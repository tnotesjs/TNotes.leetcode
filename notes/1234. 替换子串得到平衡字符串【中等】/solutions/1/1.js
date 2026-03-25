/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const n = s.length
  const target = n / 4
  const cnt = { Q: 0, W: 0, E: 0, R: 0 }
  for (const c of s) cnt[c]++
  if (
    cnt.Q === target &&
    cnt.W === target &&
    cnt.E === target &&
    cnt.R === target
  )
    return 0
  let ans = n
  let left = 0
  for (let right = 0; right < n; right++) {
    cnt[s[right]]--
    while (
      cnt.Q <= target &&
      cnt.W <= target &&
      cnt.E <= target &&
      cnt.R <= target
    ) {
      ans = Math.min(ans, right - left + 1)
      cnt[s[left]]++
      left++
    }
  }
  return ans
}
