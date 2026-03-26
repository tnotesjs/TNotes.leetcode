/**
 * @param {number} n
 */
var LUPrefix = function (n) {
  this.uploaded = new Uint8Array(n + 2)
  this.longest = 0
}

/**
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
  this.uploaded[video] = 1
  while (this.uploaded[this.longest + 1]) {
    this.longest++
  }
}

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
  return this.longest
}
