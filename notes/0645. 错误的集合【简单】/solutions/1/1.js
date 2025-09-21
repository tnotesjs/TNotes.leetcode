/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length
  let xor = 0

  // 遍历 nums，把所有元素依次异或到 xor 上
  for (const num of nums) {
    xor ^= num
  }

  // 遍历 1..n，把它们也依次异或到 xor 上
  for (let i = 1; i <= n; i++) {
    xor ^= i
  }
  // 此时成对出现的数字（正常的数字）会相互抵消，只剩下
  // xor = duplicate ^ missing

  // 找分组位
  // 因为 duplicate ≠ missing，所以 xor 至少有一位是 1，表示这两数在该位上不同。
  // 如果有多个 1 位，选哪一位都行，分组位 x 为 1 表示在 x 上 duplicate 和 missing 的值不同。
  // 这里选最右边的 1 位。
  const rightmostBit = xor & ~(xor - 1)

  // 利用 duplicate 和 missing 在某一位上不同，把数组和 1..n 分两组，
  // 组内其他正常数字都成对抵消，只剩下一个候选，
  // 最后判断哪一个在数组中就是重复数，另一个就是缺失数。

  // 组 1 分组位上是 1 ，组 2 分组位上是 0
  let xorGroup1 = 0
  let xorGroup2 = 0

  for (const num of nums) {
    if (num & rightmostBit) {
      xorGroup1 ^= num
    } else {
      xorGroup2 ^= num
    }
  }

  for (let i = 1; i <= n; i++) {
    if (i & rightmostBit) {
      xorGroup1 ^= i
    } else {
      xorGroup2 ^= i
    }
  }

  // 确定哪个是重复的数
  // 如果 xorGroup1 在数组中出现过，则它是重复的数，否则 xorGroup2 是重复的数
  for (const num of nums) {
    if (num === xorGroup1) {
      return [xorGroup1, xorGroup2]
    }
  }

  return [xorGroup2, xorGroup1]
}
