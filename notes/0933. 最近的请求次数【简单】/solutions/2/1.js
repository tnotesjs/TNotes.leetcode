// 二分下界：在有序时间戳数组中查找 >= t-3000 的首位置
var RecentCounter = function () {
  this.times = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.times.push(t)
  const target = t - 3000
  let l = 0,
    r = this.times.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (this.times[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return this.times.length - l
}

// todo
