/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function (nums) {
  const n = nums.length
  const last = new Map()
  const factors = new Array(n)

  for (let i = 0; i < n; i++) {
    const fs = []
    let x = nums[i]
    for (let p = 2; p * p <= x; p++) {
      if (x % p === 0) {
        fs.push(p)
        while (x % p === 0) x /= p
      }
    }
    if (x > 1) fs.push(x)
    factors[i] = fs
    for (const p of fs) last.set(p, i)
  }

  let maxEnd = 0
  for (let i = 0; i < n - 1; i++) {
    for (const p of factors[i]) {
      maxEnd = Math.max(maxEnd, last.get(p))
    }
    if (maxEnd === i) return i
  }
  return -1
}
