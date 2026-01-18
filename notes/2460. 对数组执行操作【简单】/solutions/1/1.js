/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length

  // 执行 n-1 步操作
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  // 将所有非零元素移到前面
  let writeIndex = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[writeIndex] = nums[i]
      writeIndex++
    }
  }

  // 剩余位置填充 0
  while (writeIndex < n) {
    nums[writeIndex] = 0
    writeIndex++
  }

  return nums
}
