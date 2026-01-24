/**
 * @param {number[]} nums
 * @return {number}
 */
var numSquarefulPerms = function (nums) {
  const n = nums.length
  nums.sort((a, b) => a - b) // 排序便于去重

  // 判断两数之和是否为完全平方数
  const isSquare = (x, y) => {
    const sum = x + y
    const sqrt = Math.floor(Math.sqrt(sum))
    return sqrt * sqrt === sum
  }

  // 构建图：记录哪些数字可以相邻
  const graph = Array.from({ length: n }, () => [])
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSquare(nums[i], nums[j])) {
        graph[i].push(j)
        graph[j].push(i)
      }
    }
  }

  let count = 0
  const used = new Array(n).fill(false)

  const backtrack = (path) => {
    if (path.length === n) {
      count++
      return
    }

    for (let i = 0; i < n; i++) {
      // 剪枝：跳过已使用或重复元素
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

      // 剪枝：检查是否可以与前一个元素相邻
      if (path.length > 0 && !graph[path[path.length - 1]].includes(i)) {
        continue
      }

      // 选择
      used[i] = true
      path.push(i)

      backtrack(path)

      // 撤销选择
      path.pop()
      used[i] = false
    }
  }

  backtrack([])
  return count
}
