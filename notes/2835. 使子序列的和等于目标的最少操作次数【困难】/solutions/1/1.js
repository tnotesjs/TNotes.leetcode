/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minOperations = function(nums, target) {
  let sum = 0
  const cnt = new Array(32).fill(0)
  for (const x of nums) {
    sum += x
    let b = 0, v = x
    while (v > 1) { v >>= 1; b++ }
    cnt[b]++
  }
  if (sum < target) return -1
  let ops = 0
  for (let i = 0; i < 31; i++) {
    if ((target >> i) & 1) {
      if (cnt[i] > 0) {
        cnt[i]--
      } else {
        let j = i + 1
        while (cnt[j] === 0) j++
        ops += j - i
        cnt[j]--
        for (let l = j - 1; l > i; l--) cnt[l]++
      }
    }
    cnt[i + 1] += cnt[i] >> 1
  }
  return ops
}
