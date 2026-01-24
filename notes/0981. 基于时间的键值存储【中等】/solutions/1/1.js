var TimeMap = function () {
  // key -> [{timestamp, value}, ...]
  this.map = new Map()
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, [])
  }
  // 由于时间戳严格递增，直接 push 即可保持有序
  this.map.get(key).push({ timestamp, value })
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return ''

  const list = this.map.get(key)
  // 二分查找最大的 timestamp_prev <= timestamp
  let left = 0,
    right = list.length - 1,
    result = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (list[mid].timestamp <= timestamp) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result === -1 ? '' : list[result].value
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
