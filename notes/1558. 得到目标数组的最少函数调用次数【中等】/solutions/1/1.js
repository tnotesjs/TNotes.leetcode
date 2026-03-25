/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ops = 0,
    maxBits = 0
  for (const x of nums) {
    let bits = 0,
      v = x
    while (v > 0) {
      if (v & 1) ops++ // 每个 1 位需要一次 +1 操作
      bits++
      v >>= 1
    }
    maxBits = Math.max(maxBits, bits)
  }
  // 还需要 maxBits - 1 次 x2 操作（共享）
  if (maxBits > 0) ops += maxBits - 1
  return ops
}
