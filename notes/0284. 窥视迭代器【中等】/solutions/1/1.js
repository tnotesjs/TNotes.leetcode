/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator
  this.peeked = null
  this.hasPeeked = false
}

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (!this.hasPeeked) {
    this.peeked = this.iterator.next()
    this.hasPeeked = true
  }
  return this.peeked
}

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.hasPeeked) {
    this.hasPeeked = false
    return this.peeked
  }
  return this.iterator.next()
}

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.hasPeeked || this.iterator.hasNext()
}
