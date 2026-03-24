/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  const n = nums.length
  const next = (i) => (((i + nums[i]) % n) + n) % n
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue
    let slow = i,
      fast = i
    // 同方向检查
    do {
      slow = next(slow)
      fast = next(next(fast))
    } while (
      slow !== fast &&
      nums[slow] * nums[i] > 0 &&
      nums[next(slow)] * nums[i] > 0 &&
      nums[fast] * nums[i] > 0 &&
      nums[next(fast)] * nums[i] > 0
    )
    if (slow !== fast || slow === next(slow)) continue
    // 检查环是否同方向
    let valid = true,
      j = slow
    do {
      if (nums[j] * nums[i] <= 0) {
        valid = false
        break
      }
      j = next(j)
    } while (j !== slow)
    if (valid) return true
  }
  return false
}
