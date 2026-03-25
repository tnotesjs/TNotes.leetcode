/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.ttl = timeToLive
  this.tokens = new Map()
}

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.tokens.set(tokenId, currentTime + this.ttl)
}

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if (this.tokens.has(tokenId) && this.tokens.get(tokenId) > currentTime) {
    this.tokens.set(tokenId, currentTime + this.ttl)
  }
}

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  let count = 0
  for (const [, expire] of this.tokens) {
    if (expire > currentTime) count++
  }
  return count
}
