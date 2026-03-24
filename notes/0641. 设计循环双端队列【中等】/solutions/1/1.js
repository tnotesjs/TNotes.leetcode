/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.cap = k + 1
  this.arr = new Array(this.cap)
  this.front = 0
  this.rear = 0
}

MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  this.front = (this.front - 1 + this.cap) % this.cap
  this.arr[this.front] = value
  return true
}

MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  this.arr[this.rear] = value
  this.rear = (this.rear + 1) % this.cap
  return true
}

MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.front = (this.front + 1) % this.cap
  return true
}

MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.rear = (this.rear - 1 + this.cap) % this.cap
  return true
}

MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1
  return this.arr[this.front]
}

MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1
  return this.arr[(this.rear - 1 + this.cap) % this.cap]
}

MyCircularDeque.prototype.isEmpty = function () {
  return this.front === this.rear
}

MyCircularDeque.prototype.isFull = function () {
  return (this.rear + 1) % this.cap === this.front
}
