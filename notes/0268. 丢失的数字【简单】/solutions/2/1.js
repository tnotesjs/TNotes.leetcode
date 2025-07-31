var missingNumber = function (nums) {
  const n = nums.length
  let result = n

  // 对数组索引和数组元素进行异或运算
  for (let i = 0; i < n; i++) {
    result ^= i ^ nums[i]
  }

  return result
}
