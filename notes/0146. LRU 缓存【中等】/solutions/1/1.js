/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map() // JS 版本利用 Map 的插入顺序特性简化实现
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1
  const val = this.map.get(key)
  // 删除后重新插入，保证最近使用的在最后
  this.map.delete(key)
  this.map.set(key, val)
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key) // 删除后重新插入，保证最近使用的在最后
  }
  this.map.set(key, value)
  if (this.map.size > this.capacity) {
    // 删除最早插入的（Map 迭代顺序即插入顺序）
    const firstKey = this.map.keys().next().value
    this.map.delete(firstKey)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
