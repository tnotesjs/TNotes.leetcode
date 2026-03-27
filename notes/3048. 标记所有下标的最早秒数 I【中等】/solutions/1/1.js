/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
  const n = nums.length, m = changeIndices.length
  const check = (t) => {
    // 在前 t 秒内标记所有下标
    // 对于每个下标 i，找到它在 changeIndices 中最后出现的位置（<= t）
    const lastOccur = new Array(n + 1).fill(-1)
    for (let s = 0; s < t; s++) {
      lastOccur[changeIndices[s]] = s
    }
    // 检查每个下标是否在 [0, t-1] 中有标记机会
    for (let i = 1; i <= n; i++) {
      if (lastOccur[i] === -1) return false
    }
    // 贪心：按标记时间排序，在标记前需要足够的减少操作
    const events = []
    for (let i = 1; i <= n; i++) {
      events.push([lastOccur[i], nums[i - 1]])
    }
    events.sort((a, b) => a[0] - b[0])
    let freeSlots = 0
    let eventIdx = 0
    for (let s = 0; s < t; s++) {
      if (eventIdx < events.length && events[eventIdx][0] === s) {
        // 需要在这个时刻标记，之前需要 events[eventIdx][1] 次减少
        if (freeSlots < events[eventIdx][1]) return false
        freeSlots -= events[eventIdx][1]
        eventIdx++
      } else {
        freeSlots++
      }
    }
    return eventIdx === events.length
  }
  let lo = 1, hi = m, ans = -1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (check(mid)) {
      ans = mid
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
  return ans
}
