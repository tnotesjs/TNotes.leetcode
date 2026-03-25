/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage]
  this.cur = 0
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.cur++
  this.history.length = this.cur
  this.history.push(url)
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.cur = Math.max(0, this.cur - steps)
  return this.history[this.cur]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.cur = Math.min(this.history.length - 1, this.cur + steps)
  return this.history[this.cur]
}
