/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.arr = new Array(n)
  this.ptr = 1
}

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.arr[idKey - 1] = value

  if (idKey !== this.ptr) return []

  const res = []
  while (this.ptr <= this.arr.length && this.arr[this.ptr - 1] !== undefined) {
    res.push(this.arr[this.ptr - 1])
    this.ptr++
  }

  return res
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
