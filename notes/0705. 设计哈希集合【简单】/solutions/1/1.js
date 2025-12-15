// 使用分离链接法（拉链法）实现哈希集合
var MyHashSet = function () {
  this.capacity = 1024 // 2^10 初始桶数量（2 的幂更利于位运算）
  this.buckets = Array.from({ length: this.capacity }, () => [])
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const idx = this._hash(key)
  const bucket = this.buckets[idx]
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === key) return // 已存在，直接返回
  }
  bucket.push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const idx = this._hash(key)
  const bucket = this.buckets[idx]
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === key) {
      bucket.splice(i, 1)
      return
    }
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const idx = this._hash(key)
  const bucket = this.buckets[idx]
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === key) return true
  }
  return false
}

// 简单哈希函数：按容量取模（key 范围 0..1e6）
MyHashSet.prototype._hash = function (key) {
  return key & (this.capacity - 1) // 等价于 key % capacity（当 capacity 为 2 的幂）
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
