/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  function canPartition(s, idx, target) {
    if (idx === s.length) return target === 0
    let num = 0
    for (let i = idx; i < s.length; i++) {
      num = num * 10 + Number(s[i])
      if (num > target) break
      if (canPartition(s, i + 1, target - num)) return true
    }
    return false
  }

  let ans = 0
  for (let i = 1; i <= n; i++) {
    if (canPartition(String(i * i), 0, i)) {
      ans += i * i
    }
  }
  return ans
}
