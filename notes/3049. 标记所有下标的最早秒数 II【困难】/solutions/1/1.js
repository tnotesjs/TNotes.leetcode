/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
  const n = nums.length, m = changeIndices.length
  const totalDecrement = nums.reduce((a, b) => a + b, 0)

  const check = (t) => {
    // 在前t秒内，可以选择"瞬间归零"某些下标（使用changeIndices指定时刻）
    // 或者用空闲时间做减少操作
    // 贪心：从后往前遍历，对于每个可以归零的下标，计算收益 = nums[idx] - 1（节省的减少操作数）
    // 用最小堆维护已选择的收益，如果当前收益更大则替换
    const { MinPriorityQueue } = require('@datastructures-js/priority-queue') || {}
    // 简单实现：用数组模拟
    const pq = []
    const push = (v) => { pq.push(v); pq.sort((a, b) => a - b) }
    const pop = () => pq.shift()
    const peek = () => pq[0]

    let freeSlots = 0
    const seen = new Set()
    for (let s = t - 1; s >= 0; s--) {
      const idx = changeIndices[s] - 1
      if (nums[idx] > 0 && !seen.has(idx)) {
        seen.add(idx)
        const gain = nums[idx] - 1 // 节省 nums[idx] 减少操作，但占用 1 个标记时间和 1 个归零时间
        if (freeSlots > 0) {
          // 使用一个空闲槽来归零
          freeSlots--
          push(gain)
        } else if (pq.length > 0 && peek() < gain) {
          // 替换收益最小的
          freeSlots += pop() // 退回之前的收益
          push(gain)
          // 但这不增加 freeSlots 因为我们用了当前槽
        } else {
          freeSlots++ // 不归零，当作空闲
        }
      } else {
        freeSlots++
      }
    }
    let saved = 0
    for (const g of pq) saved += g
    // 需要 n 次标记操作 + (totalDecrement - saved) 次减少操作
    return freeSlots >= (totalDecrement - saved) + n - pq.length
    // freeSlots 是剩余空闲时间
    // 我们用了 pq.length 个归零操作（各自占 1 个时间归零 + 之前 1 个时间标记...）
    // 重新理解：总共 t 个时间槽
    // pq.length 个用于"瞬间归零"（每个需要 1 个时间做 set 操作）
    // n 个用于"标记"（每个需要 1 个时间）
    // 剩余 t - pq.length 个时间 = 空闲 + 标记时间
    // 空闲可以做减少操作
    // ...实际上让我重新思考

    // 简化：二分+贪心
  }

  // 使用更简单正确的方法
  const check2 = (t) => {
    // 从后往前，对每个 changeIndices[s]-1，如果 nums[idx] >= 2 则值得归零
    // 每次归零需要消耗 2 个时间槽（1 个 set + 1 个 mark）
    // 不归零的需要 nums[idx] + 1 个时间槽（nums[idx] 次 decrement + 1 次 mark）
    const lastOccur = new Array(n).fill(-1)
    for (let s = 0; s < t; s++) {
      lastOccur[changeIndices[s] - 1] = s
    }
    // 哪些下标值得归零？nums[idx] >= 2 的
    // 从后往前扫描时间线
    const gains = [] // (gain, time) where gain = nums[idx] - 1
    for (let i = 0; i < n; i++) {
      if (lastOccur[i] !== -1 && nums[i] >= 2) {
        gains.push([nums[i] - 1, lastOccur[i]])
      }
    }
    // 按时间排序
    gains.sort((a, b) => a[1] - b[1])

    // 贪心模拟：按时间从前往后
    // 每个"归零"操作占用 1 个时间槽（在 lastOccur[i] 时刻执行 set），还需 1 个时间做 mark
    // 选择收益最大的一些来归零

    // 更简洁：用最小堆
    const pq2 = []  // min-heap of gains
    let freeSlots = 0
    let gIdx = 0
    let totalSaved = 0
    for (let s = 0; s < t; s++) {
      // 检查是否有归零事件在这个时刻
      while (gIdx < gains.length && gains[gIdx][1] === s) {
        const g = gains[gIdx][0]
        if (freeSlots > 0) {
          freeSlots--
          pq2.push(g)
          pq2.sort((a, b) => a - b)
          totalSaved += g
        } else if (pq2.length > 0 && pq2[0] < g) {
          totalSaved -= pq2.shift()
          pq2.push(g)
          pq2.sort((a, b) => a - b)
          totalSaved += g
        }
        gIdx++
      }
      if (gIdx === 0 || gains.length === 0 || s !== gains[gIdx - 1]?.[1]) {
        freeSlots++
      }
    }
    const needDecrement = totalDecrement - totalSaved
    const needMark = n
    return freeSlots >= needDecrement + needMark - pq2.length
  }

  let lo = n, hi = m, ans = -1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (check2(mid)) {
      ans = mid
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
  return ans
}
