var twoSum = function (nums, target) {
  // 初始化哈希表
  const map = new Map()
  for (let i = 0; i < nums.length; i++) map.set(nums[i], i)

  // 查询哈希表
  for (let i = 0; i < nums.length; i++) {
    const anotherNum = target - nums[i]
    if (map.has(anotherNum) && map.get(anotherNum) !== i)
      return [i, map.get(anotherNum)]
  }
}
