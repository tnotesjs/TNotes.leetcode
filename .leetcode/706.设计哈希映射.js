/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

// 链表节点类
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

var MyHashMap = function () {
  this.size = 10000 // 哈希表大小
  this.buckets = new Array(this.size).fill(null) // 初始化桶数组
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const index = key % this.size

  // 如果该桶为空，直接插入新节点
  if (this.buckets[index] === null) {
    this.buckets[index] = new ListNode(key, value)
    return
  }

  // 遍历链表查找是否已存在该key
  let curr = this.buckets[index]
  while (curr) {
    if (curr.key === key) {
      // 更新已存在的key的值
      curr.value = value
      return
    }
    if (curr.next === null) break
    curr = curr.next
  }

  // 在链表末尾添加新节点
  curr.next = new ListNode(key, value)
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const index = key % this.size

  let curr = this.buckets[index]
  while (curr) {
    if (curr.key === key) {
      return curr.value
    }
    curr = curr.next
  }

  return -1 // 未找到返回-1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const index = key % this.size

  // 如果该桶为空，直接返回
  if (this.buckets[index] === null) {
    return
  }

  // 如果要删除的是头节点
  if (this.buckets[index].key === key) {
    this.buckets[index] = this.buckets[index].next
    return
  }

  // 查找要删除的节点
  let prev = this.buckets[index]
  let curr = prev.next
  while (curr) {
    if (curr.key === key) {
      prev.next = curr.next // 删除节点
      return
    }
    prev = curr
    curr = curr.next
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
