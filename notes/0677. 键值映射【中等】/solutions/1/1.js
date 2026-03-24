var MapSum = function () {
  this.map = new Map()
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.map.set(key, val)
}

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let total = 0
  for (const [key, val] of this.map) {
    if (key.startsWith(prefix)) total += val
  }
  return total
}
