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

// todo
