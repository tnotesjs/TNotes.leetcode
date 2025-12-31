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
