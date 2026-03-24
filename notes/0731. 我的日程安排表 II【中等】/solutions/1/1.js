var MyCalendarTwo = function () {
  this.events = []
  this.overlaps = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (const [s, e] of this.overlaps) {
    if (start < e && end > s) return false
  }
  for (const [s, e] of this.events) {
    if (start < e && end > s) {
      this.overlaps.push([Math.max(start, s), Math.min(end, e)])
    }
  }
  this.events.push([start, end])
  return true
}
