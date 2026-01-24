/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function (arr) {
  const n = arr.length
  const oddNext = new Array(n).fill(-1) // 奇数跳的下一个位置
  const evenNext = new Array(n).fill(-1) // 偶数跳的下一个位置

  // 使用单调栈构建跳跃关系
  const buildNext = (sortedIndices) => {
    const next = new Array(n).fill(-1)
    const stack = []

    for (const i of sortedIndices) {
      while (stack.length > 0 && stack[stack.length - 1] < i) {
        next[stack.pop()] = i
      }
      stack.push(i)
    }

    return next
  }

  // 按值升序、索引升序排序，用于奇数跳
  const oddSorted = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => arr[a] - arr[b] || a - b,
  )
  oddNext.splice(0, n, ...buildNext(oddSorted))

  // 按值降序、索引升序排序，用于偶数跳
  const evenSorted = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => arr[b] - arr[a] || a - b,
  )
  evenNext.splice(0, n, ...buildNext(evenSorted))

  // 动态规划：odd[i] 表示从 i 开始奇数跳能否到达终点
  const odd = new Array(n).fill(false)
  const even = new Array(n).fill(false)
  odd[n - 1] = even[n - 1] = true

  // 从后向前遍历
  for (let i = n - 2; i >= 0; i--) {
    // 如果奇数跳能跳到 j，且从 j 偶数跳能到达终点，则从 i 奇数跳能到达
    if (oddNext[i] !== -1) {
      odd[i] = even[oddNext[i]]
    }
    // 如果偶数跳能跳到 j，且从 j 奇数跳能到达终点，则从 i 偶数跳能到达
    if (evenNext[i] !== -1) {
      even[i] = odd[evenNext[i]]
    }
  }

  // 统计从奇数跳开始能到达终点的起始位置数量
  return odd.filter((v) => v).length
}
