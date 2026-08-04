/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length
  k %= n
  let count = 0
  // 共有 gcd(k, n) 个环，把每个环上的元素依次放到目标位置
  for (let start = 0; count < n; start++) {
    let current = start
    let prev = nums[start]
    do {
      const next = (current + k) % n
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count++
    } while (current !== start)
  }
}
