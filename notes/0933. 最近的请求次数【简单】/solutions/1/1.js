// 使用队列 + 头指针，避免 O(n) 的 shift 开销
var RecentCounter = function () {
  this.q = []
  this.head = 0
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.q.push(t)
  const lower = t - 3000
  // 前移头指针，跳过过期请求
  while (this.head < this.q.length && this.q[this.head] < lower) this.head++
  // 可选压缩：防止 head 过大导致数组增长
  if (this.head > 1024 && this.head * 2 > this.q.length) {
    this.q = this.q.slice(this.head)
    this.head = 0
  }
  return this.q.length - this.head
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 可选压缩：防止 head 过大导致数组增长
// if (this.head > 1024 && this.head * 2 > this.q.length) {
//   this.q = this.q.slice(this.head) // 只保留有效部分
//   this.head = 0 // 重置头指针
// }

// 压缩条件：是一个经验性优化条件，可根据实际的优化效果自行调控。
// 目的是在 head 指针过大时，释放掉数组前部的无效空间，防止内存无限增长。

// 第一个条件：this.head > 1024
// 当 head 指针超过 1024 时才考虑压缩
// 这是为了避免频繁压缩带来的性能开销
// 1024 是一个经验值，可以调整

// 第二个条件：this.head * 2 > this.q.length
// 已过期的数据量 > 当前有效数据量
// 无效空间 > 有效空间

// 示例：
// 假设：head = 1200，q.length = 1500，已过期数据：1200个，有效数据：300 个
// 条件 1：head > 1024 ✔️
// 条件 2：head * 2 = 2400 > 1500 ✔️
// 压缩有意义：无效数据比有效数据多

// 压缩前：[过期, 过期, ..., 过期, 有效, 有效, ...]
// 压缩后：[有效, 有效, ...]

// 为什么需要这个优化？
// 没有压缩的情况：
//   时间推移后：
//   q = [t1, t2, t3, ..., t10000]  // 长度 10000
//   head = 9500                    // 只有最后 500 个有效
//   内存浪费：存储了 9500 个过期数据
// 压缩后：
//   q = [t9501, t9502, ..., t10000]  // 长度 500
//   head = 0
//   内存节省：只存储有效数据

// 这个优化是空间换时间的平衡：
// - 不压缩：内存可能无限增长，但操作快
// - 压缩：内存优化，但slice()有O(n)的时间成本
// - 条件判断确保只在真正需要时才压缩
// 这是一个很实用的设计，在数据流处理中很常见，既保证了性能，又防止了内存泄漏。

// ⚠️ 注意：
// 在 leetcode 中提交时，将【可选压缩】部分的代码注释掉也能通过所有测试，并且执行时间和内存消耗都更低。
// 【可选压缩】的逻辑在 leetcode 这道题的测试用例中，并没有体现出啥明显的优势，反而因为 slice() 的开销导致整体性能下降。

// 2025.12.28 提交测试结果记录：
// 有【可选压缩】
//   执行用时分布 40ms 击败 63.57%
//   消耗内存分布 71.29MB 击败 13.18%
// 无【可选压缩】
//   执行用时分布 34ms 击败 82.95%
//   消耗内存分布 69.88MB 击败 54.26%
