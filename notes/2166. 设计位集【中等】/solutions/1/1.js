/**
 * @param {number} size
 */
var Bitset = function (size) {
  this.arr = new Uint8Array(size)
  this.size = size
  this.ones = 0
  this.flipped = false
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  if (this.flipped) {
    if (this.arr[idx] === 1) {
      this.arr[idx] = 0
      this.ones++
    }
  } else {
    if (this.arr[idx] === 0) {
      this.arr[idx] = 1
      this.ones++
    }
  }
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  if (this.flipped) {
    if (this.arr[idx] === 0) {
      this.arr[idx] = 1
      this.ones--
    }
  } else {
    if (this.arr[idx] === 1) {
      this.arr[idx] = 0
      this.ones--
    }
  }
}

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  this.flipped = !this.flipped
  this.ones = this.size - this.ones
}

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  return this.ones === this.size
}

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  return this.ones > 0
}

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  return this.ones
}

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  const res = []
  for (let i = 0; i < this.size; i++) {
    res.push(this.flipped ? 1 - this.arr[i] : this.arr[i])
  }
  return res.join('')
}
