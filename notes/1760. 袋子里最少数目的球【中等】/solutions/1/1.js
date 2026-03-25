/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let lo = 1,
    hi = Math.max(...nums)
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    let ops = 0
    for (const x of nums) ops += Math.ceil(x / mid) - 1
    if (ops <= maxOperations) hi = mid
    else lo = mid + 1
  }
  return lo
}
