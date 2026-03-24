var MyLinkedList = function () {
  this.head = null
  this.size = 0
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1
  let cur = this.head
  for (let i = 0; i < index; i++) cur = cur.next
  return cur.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val)
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return
  if (index < 0) index = 0
  const node = { val, next: null }
  if (index === 0) {
    node.next = this.head
    this.head = node
  } else {
    let prev = this.head
    for (let i = 0; i < index - 1; i++) prev = prev.next
    node.next = prev.next
    prev.next = node
  }
  this.size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return
  if (index === 0) this.head = this.head.next
  else {
    let prev = this.head
    for (let i = 0; i < index - 1; i++) prev = prev.next
    prev.next = prev.next.next
  }
  this.size--
}
