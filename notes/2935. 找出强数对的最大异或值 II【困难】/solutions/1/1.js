/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
  nums.sort((a, b) => a - b)
  const HIGH_BIT = 19
  const ch = [[0, 0]]
  const cnt = [0]
  function add(val) {
    let cur = 0
    for (let i = HIGH_BIT; i >= 0; i--) {
      const bit = (val >> i) & 1
      if (!ch[cur][bit]) {
        ch.push([0, 0])
        cnt.push(0)
        ch[cur][bit] = ch.length - 1
      }
      cur = ch[cur][bit]
      cnt[cur]++
    }
  }
  function remove(val) {
    let cur = 0
    for (let i = HIGH_BIT; i >= 0; i--) {
      cur = ch[cur][(val >> i) & 1]
      cnt[cur]--
    }
  }
  function maxXor(val) {
    let cur = 0, res = 0
    for (let i = HIGH_BIT; i >= 0; i--) {
      const bit = (val >> i) & 1
      const want = 1 - bit
      if (ch[cur][want] && cnt[ch[cur][want]] > 0) {
        res |= (1 << i)
        cur = ch[cur][want]
      } else {
        cur = ch[cur][bit]
      }
    }
    return res
  }
  let ans = 0, left = 0
  for (let right = 0; right < nums.length; right++) {
    add(nums[right])
    while (nums[right] > 2 * nums[left]) {
      remove(nums[left])
      left++
    }
    ans = Math.max(ans, maxXor(nums[right]))
  }
  return ans
}
