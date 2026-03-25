var FrontMiddleBackQueue = function () {
  this.arr = []
}

FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.arr.unshift(val)
}

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  const mid = Math.floor(this.arr.length / 2)
  this.arr.splice(mid, 0, val)
}

FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.arr.push(val)
}

FrontMiddleBackQueue.prototype.popFront = function () {
  return this.arr.length ? this.arr.shift() : -1
}

FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (!this.arr.length) return -1
  const mid = Math.floor((this.arr.length - 1) / 2)
  return this.arr.splice(mid, 1)[0]
}

FrontMiddleBackQueue.prototype.popBack = function () {
  return this.arr.length ? this.arr.pop() : -1
}
