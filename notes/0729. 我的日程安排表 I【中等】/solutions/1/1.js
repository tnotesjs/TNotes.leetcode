var MyCalendar = function () {
  this.events = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  for (const [s, e] of this.events) {
    if (start < e && end > s) return false
  }
  this.events.push([start, end])
  return true
}
