/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.mem = new Array(n).fill(0)
}

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  let count = 0
  for (let i = 0; i < this.mem.length; i++) {
    if (this.mem[i] === 0) {
      count++
      if (count === size) {
        for (let j = i - size + 1; j <= i; j++) this.mem[j] = mID
        return i - size + 1
      }
    } else {
      count = 0
    }
  }
  return -1
}

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function (mID) {
  let count = 0
  for (let i = 0; i < this.mem.length; i++) {
    if (this.mem[i] === mID) {
      this.mem[i] = 0
      count++
    }
  }
  return count
}
