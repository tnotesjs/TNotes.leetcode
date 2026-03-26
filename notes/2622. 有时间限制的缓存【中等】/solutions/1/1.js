var TimeLimitedCache = function () {
  this.cache = new Map() // key -> { value, timer }
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const exists = this.cache.has(key)
  if (exists) clearTimeout(this.cache.get(key).timer)
  const timer = setTimeout(() => this.cache.delete(key), duration)
  this.cache.set(key, { value, timer })
  return exists
}

/**
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1
}

/**
 * @return {number}
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size
}
